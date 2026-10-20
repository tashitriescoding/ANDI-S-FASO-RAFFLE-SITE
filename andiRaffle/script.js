// 1) Keep every size locked to the poster width (1u = 1% of the slide width).
//    CSS already has a fallback; this just removes the scrollbar-width error.
const root = document.documentElement;
const firstSlide = document.querySelector(".slide");
function setUnit() {
  root.style.setProperty("--u", firstSlide.getBoundingClientRect().width / 100 + "px");
}
setUnit();
new ResizeObserver(setUnit).observe(firstSlide);

// 2) Tap or hover a plushie and it hops.
document.querySelectorAll(".plushies li").forEach(li => {
  const hop = () => {
    li.classList.remove("bounce");
    void li.offsetWidth;            // restart the animation
    li.classList.add("bounce");
  };
  li.addEventListener("pointerenter", hop);
  li.addEventListener("click", hop);
});