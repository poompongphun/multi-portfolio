const doc = document.documentElement;
const darkBtn = document.getElementById("darkBtn");
const svg = document.getElementsByClassName("svg");
const section = doc.querySelectorAll("section");
const navMenu = document.getElementById("navMenu");
const navA = navMenu.querySelectorAll("a");
let currentSection = "home";

// navA.forEach((a) => {
//   a.onclick = () => {
//     activeBtn(a.href.split("#")[1]);
//   };
// });

window.onscroll = () => {
  if (document.documentElement.scrollTop == 0) {
    document.getElementsByClassName("navbar")[0].style.height = "86px";
  } else document.getElementsByClassName("navbar")[0].style.height = "56px";
  let top = doc.scrollTop + 56;
  let bottom = top + doc.offsetHeight;
  let arr = [];
  section.forEach((ele) => {
    if (
      (ele.offsetTop < top && top < ele.offsetTop + ele.offsetHeight) ||
      (ele.offsetTop < bottom && bottom < ele.offsetTop + ele.offsetHeight)
    ) {
      arr.push(ele.id);
    }
  });
  if (arr[0] && arr[0] != currentSection) {
    currentSection = arr[0];
    activeBtn(currentSection);
  }
};

function activeBtn(id) {
  navA.forEach((aa) => {
    if (aa.classList.contains("active")) {
      aa.classList.remove("active");
    } else if (aa.href.split("#")[1] == id) {
      aa.classList.add("active");
    }
  });
}

function swDark(e) {
  //   this.dataset.dark = !this.dataset.dark;
  const value = e.dataset.dark === "true";
  console.log(!value);
  e.dataset.dark = `${!value}`;
  if (value) {
    // ขาว
    doc.style.setProperty("--bgColorST", "hsl(0, 0%, 100%)");
    doc.style.setProperty("--bgColorND", "hsl(198, 74%, 82%)");
    doc.style.setProperty("--bgColorRD", "hsl(214, 44%, 62%)");
    doc.style.setProperty("--primary", "hsl(190, 99%, 40%)");
    doc.style.setProperty("--normal", "hsl(228, 7%, 13%)");
    doc.style.setProperty("--btnColor", "hsl(0, 0%, 100%)");
    doc.style.setProperty("--bl", "black");
    doc.style.setProperty("--navbar", "hsla(198, 74%, 82%, 0.5)");
  } else {
    // ดำ
    doc.style.setProperty("--bgColorST", "hsl(231, 30%, 13%)");
    doc.style.setProperty("--bgColorND", "hsl(232, 38%, 11%)");
    doc.style.setProperty("--bgColorRD", "hsl(231, 40%, 10%)");
    doc.style.setProperty("--primary", "hsl(229, 100%, 69%)");
    doc.style.setProperty("--normal", "hsl(231, 24%, 72%)");
    doc.style.setProperty("--btnColor", "hsl(229, 32%, 17%)");
    doc.style.setProperty("--bl", "white");
    doc.style.setProperty("--navbar", "hsla(232, 38%, 11%, 0.5)");
  }
  for (let i = 0; i < svg.length; i++) {
    const ele = svg[i];
    ele.style.fill = doc.style.getPropertyValue("--bl");
  }
}
