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

// Highlight the nav link for the section in view
const links = [...nav.querySelectorAll("a")];
const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.removeAttribute("aria-current"));
      const a = byId.get(entry.target.id);
      if (a) a.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

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

document.getElementById("year").textContent = new Date().getFullYear();
