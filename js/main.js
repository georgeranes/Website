/* Small enhancements only — the page works without this file. */

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
});
nav.addEventListener("click", e => {
  if (e.target.closest("a") && nav.classList.contains("open")) toggle.click();
});

// Hairline under the header once the page scrolls
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section being read: the last section whose top has passed
// 40% of the way down the screen, or the final section once the page is scrolled to the bottom
// (Contact is too short to ever reach that line on its own).
const links = [...nav.querySelectorAll('a[href^="#"]')];
const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
const sections = [...document.querySelectorAll("main section[id]")].filter(s => byId.has(s.id));
let holdUntil = 0;                        // after a nav click, keep that link lit while the page scrolls

function setCurrent(id) {
  links.forEach(a => a.removeAttribute("aria-current"));
  const a = id && byId.get(id);
  if (a) a.setAttribute("aria-current", "true");
}

function spy() {
  if (Date.now() < holdUntil) return;
  const doc = document.documentElement;
  const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
  let current = null;
  if (atBottom) current = sections[sections.length - 1];
  else sections.forEach(s => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = s; });
  setCurrent(current && current.id);
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { ticking = false; spy(); });
}, { passive: true });
links.forEach(a => a.addEventListener("click", () => {
  setCurrent(a.getAttribute("href").slice(1));
  holdUntil = Date.now() + 1200;
  setTimeout(spy, 1250);
}));
spy();

if ("IntersectionObserver" in window) {
  // Fade sections in as they arrive
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); reveal.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

// Mandarin totals, read from the flashcard app's own data so they never go stale
if (typeof SETS !== "undefined") {
  const cards = SETS.reduce((n, s) => n + s.cards.length, 0);
  const chars = new Set();
  SETS.forEach(s => s.cards.forEach(c => (c.toks || []).forEach(t => chars.add(t.c))));
  document.getElementById("m-sets").textContent = SETS.length;
  document.getElementById("m-cards").textContent = cards;
  document.getElementById("m-chars").textContent = chars.size;
}

// Résumé viewer: show the PDF on the page instead of handing it to the browser, which on many
// setups (and most phones) downloads it. PDF.js draws each page; it loads only when first needed.
const viewer = document.getElementById("resume-viewer");
const pagesEl = document.getElementById("rv-pages");
const PDFJS = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/";
let rendered = false;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.append(s);
  });
}

async function renderResume() {
  if (rendered) return;
  rendered = true;
  try {
    if (!window.pdfjsLib) await loadScript(PDFJS + "pdf.min.js");
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + "pdf.worker.min.js";
    const pdf = await window.pdfjsLib.getDocument(viewer.dataset.src).promise;
    const pad = parseFloat(getComputedStyle(pagesEl).paddingLeft) * 2;
    const width = Math.min(pagesEl.clientWidth - pad, 900);
    const dpr = window.devicePixelRatio || 1;
    pagesEl.replaceChildren();
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      const scale = width / page.getViewport({ scale: 1 }).width;
      const vp = page.getViewport({ scale: scale * dpr });
      const canvas = document.createElement("canvas");
      canvas.width = vp.width; canvas.height = vp.height;
      canvas.style.width = vp.width / dpr + "px";
      canvas.setAttribute("aria-label", "Résumé page " + n);
      pagesEl.append(canvas);
      await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
    }
  } catch (err) {
    rendered = false;                     // let the next open try again
    pagesEl.innerHTML = '<p class="rv-status">The viewer couldn’t load. ' +
      '<a href="' + viewer.dataset.src + '" target="_blank" rel="noopener">Open the PDF instead</a>.</p>';
  }
}

if (viewer && typeof viewer.showModal === "function") {
  document.querySelectorAll("[data-resume-viewer]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    viewer.showModal();
    document.body.classList.add("rv-open");
    renderResume();
  }));
  viewer.querySelector(".rv-close").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", e => { if (e.target === viewer) viewer.close(); });  // backdrop
  viewer.addEventListener("close", () => document.body.classList.remove("rv-open"));
}

// Arriving with a section in the address (e.g. "Back" from the flashcards to #mandarin):
// jump there once the fonts have loaded, since the late-loading fonts shift the layout.
if (location.hash.length > 1) {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target) {
    const jump = () => {
      const root = document.documentElement;
      root.style.scrollBehavior = "auto";   // jump instead of animating from the top
      target.scrollIntoView({ block: "start" });
      root.style.scrollBehavior = "";
    };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(jump);
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
