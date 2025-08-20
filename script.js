// === Fungsi Copy ===
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent || "";

  navigator.clipboard.writeText(text).then(() => {
    showToast("✅ " + id.toUpperCase() + " disalin: " + text);
  });
}

// === Fungsi Download QRIS ===
function downloadQRIS() {
  const qrisUrl = "https://cdn.wbk.digital/files/1754836884443.QRIS.png";
  const a = document.createElement("a");
  a.href = qrisUrl;
  a.download = "QRIS-EPINHOST.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast("📥 QRIS berhasil diunduh");
}

// === Toast Notification ===
function showToast(msg) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// === Navigasi bottom-nav ===
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

// === Theme Toggle ===
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "☾";
});
