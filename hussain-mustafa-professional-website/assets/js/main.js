const navItems = [
  ["Home","index.html","home"],["About","about.html","about"],["Education","education.html","education"],
  ["Experience","experience.html","experience"],["Research","research.html","research"],
  ["Certifications","certifications.html","certifications"],["Skills","skills.html","skills"],
  ["Community","community.html","community"]
];
const page = document.body.dataset.page || "home";
const header = document.getElementById("site-header");
if (header) {
  header.innerHTML = `<header class="site-header"><div class="nav-wrap">
    <a class="brand" href="index.html" aria-label="Hussain Mustafa home"><span class="brand-mark">H.</span><span>HUSSAIN MUSTAFA<small>CIVIL ENGINEERING</small></span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>
    <nav class="nav-links" aria-label="Main navigation">
      ${navItems.map(([label,url,key]) => `<a href="${url}" class="${page===key?'active':''}">${label}</a>`).join("")}
      <a class="nav-contact ${page==='contact'?'active':''}" href="contact.html">Contact ↗</a>
    </nav></div></header>`;
  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); toggle.textContent="☰";
  }));
}
const footer = document.getElementById("site-footer");
if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="section-shell">
    <div class="footer-top"><div><div class="footer-brand">Hussain Mustafa<span>.</span></div><p>Civil Engineering · Construction Management · Sustainable Construction</p></div>
    <div class="footer-links"><a href="about.html">About</a><a href="research.html">Research</a><a href="experience.html">Experience</a><a href="certifications.html">Credentials</a><a href="contact.html">Contact</a></div></div>
    <div class="footer-bottom"><span>© <span id="year"></span> Hussain Mustafa. All rights reserved.</span><a class="back-top" href="#top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Back to top ↑</a></div>
  </div></footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  });
}, {threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
