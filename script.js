// ✅ Fungsi copy nomor / teks
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText || el.textContent || "";
  navigator.clipboard.writeText(text).then(() => {
    showToast("✅ Disalin: " + text);
  });
}

// ✅ Fungsi toast notifikasi
function showToast(msg) {
  let toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100); 
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// ✅ Navigasi bottom-nav
const buttons = document.querySelectorAll(".bottom-nav button");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // reset tombol
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // tampilkan section sesuai target
    const target = btn.getAttribute("data-target");
    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ✅ Theme toggle (dark / light mode)
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "☾";
});

// ✅ Tabs untuk metode pembayaran (QRIS / Transfer)
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(tab => {
  tab.addEventListener("click", () => {
    tabButtons.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.getAttribute("data-target");
    tabContents.forEach(c => {
      c.style.display = (c.id === target) ? "block" : "none";
    });
  });
});
