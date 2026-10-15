export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function toast(msg: string) {
  const el = document.createElement("div");
  el.className = "toast";
  el.setAttribute("role", "status");
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

export function toggleParty() {
  const d = document.documentElement;
  const on = d.hasAttribute("data-party");
  if (on) d.removeAttribute("data-party");
  else d.setAttribute("data-party", "");
  toast(on ? "accent restored" : "accent shifted");
}
