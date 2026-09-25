export function initTheme() {
  const root = document.documentElement;

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    const themeIcon = document.getElementById("themeIcon");
    const themeToggle = document.getElementById("themeToggle");
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☾" : "☀";
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      );
    }
    try {
      localStorage.setItem("ridwan-theme", theme);
    } catch (_) {}
  };

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () =>
      setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
    );
  }

  setTheme(root.dataset.theme === "light" ? "light" : "dark");
}
