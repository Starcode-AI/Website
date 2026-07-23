const STORAGE_KEY = "sb-theme";
const root = document.documentElement;

function readSavedTheme() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Der Wechsel funktioniert auch, wenn der Browser Speicher blockiert.
  }
}

function getPreferredTheme() {
  try {
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function getThemeButton() {
  return document.querySelector("button[data-theme]");
}

export function applyTheme(value) {
  const theme = value === "light" ? "light" : "dark";
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  saveTheme(theme);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute(
    "content",
    theme === "light" ? "#f6f8fc" : "#07090d"
  );

  const button = getThemeButton();
  if (!button) return;

  const switchesToLight = theme === "dark";
  button.textContent = switchesToLight ? "☀" : "☾";
  button.dataset.currentTheme = theme;
  button.setAttribute("aria-pressed", String(theme === "light"));
  button.setAttribute(
    "aria-label",
    switchesToLight
      ? "Helles Design aktivieren"
      : "Dunkles Design aktivieren"
  );
}

export function setupTheme() {
  applyTheme(readSavedTheme() || getPreferredTheme());

  const button = getThemeButton();
  if (!button || button.dataset.themeReady === "true") return;

  button.dataset.themeReady = "true";
  button.type = "button";

  // Begrenzt den unsichtbaren Klickbereich exakt auf den sichtbaren Button.
  button.style.position = "relative";
  button.style.display = "inline-grid";
  button.style.placeItems = "center";
  button.style.width = "42px";
  button.style.minWidth = "42px";
  button.style.maxWidth = "42px";
  button.style.height = "42px";
  button.style.minHeight = "42px";
  button.style.maxHeight = "42px";
  button.style.flex = "0 0 42px";
  button.style.inset = "auto";
  button.style.margin = "0";
  button.style.padding = "0";
  button.style.pointerEvents = "auto";

  // Der Wechsel passiert ausschließlich bei einem echten Klick auf den Button.
  button.addEventListener("click", (event) => {
    if (event.currentTarget !== button) return;

    event.preventDefault();
    event.stopPropagation();

    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}
