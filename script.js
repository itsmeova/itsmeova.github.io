// fungsi copy
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent || "";
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Disalin: " + text);
  });
}

// fungsi navigasi bottom-nav
const buttons = document.querySelectorAll(".bottom-nav button");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");
    sections.forEach(sec => {
      if (sec.id === target) {
        sec.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        sec.classList.remove("active");
      }
    });
  });
});

// theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "☾";
});
