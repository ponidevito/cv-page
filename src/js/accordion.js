// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  
  items.forEach((item,index) => {
  
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
          gsap.set(parent, {  });
        // parent.style.backgroundColor = "#dde4ce";
      } else {
        // parent.style.backgroundColor = "rgb(233 243 211 / 38%)";
       
        document.querySelectorAll(".accordion__item").forEach((child) => child.classList.remove("accordion__item-active"));
        // document.querySelectorAll(".accordion__item").forEach((item) => item.style.backgroundColor = "rgb(233 243 211 / 38%)");
        parent.classList.add("accordion__item-active");
        // parent.style.backgroundColor = "rgb(233 243 211 / 38%)";
      }
    });
  });
}
accordion();

// const list = gsap.utils.toArray(".accordion");

// list.forEach((accordion, index) => {
//   let isOpen = index === 0 ? true : false;

//   const title = accordion.getElementsByClassName("accordion__item-trigger")[0];
//   // const icon = accordion.getElementsByClassName("accordion__icon")[0];
//   const content = accordion.getElementsByClassName(
//     "accordion__item-content"
//   )[0];

//   gsap.set(
//     title,
//     isOpen
//       ? { background: "#fff", color: "#000" }
//       : { background: "#4b0082", color: "#fff" }
//   );
//   gsap.set(content, { height: isOpen ? "auto" : "0px"});
//   gsap.set(content, {  display: isOpen ? "block" : 'nonne' });

//   // gsap.set(icon, { scale: isOpen ? -1 : 1 });

//   title.addEventListener("click", () => {
//     isOpen = !isOpen;

//     gsap.to(
//       title,
//       isOpen
//         ? { background: "#fff", color: "#000" }
//         : { background: "#4b0082", color: "#fff" }
//     );
//     gsap.to(content, { height: isOpen ? "auto" : "0px" });
//     // gsap.to(icon, { scale: isOpen ? -1 : 1 });
//   });
// });
