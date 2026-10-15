export const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let timer: ReturnType<typeof setTimeout>;
/* One persistent role=status region (rendered in layout); we only change its text. */
export function toast(msg: string) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.remove("on");
  void el.offsetWidth;
  el.classList.add("on");
  clearTimeout(timer);
  timer = setTimeout(() => { el.textContent = ""; el.classList.remove("on"); }, 2600);
}

export function toggleParty() {
  const d = document.documentElement;
  const on = d.hasAttribute("data-party");
  if (on) d.removeAttribute("data-party");
  else d.setAttribute("data-party", "");
  toast(on ? "accent restored" : "accent shifted");
}
