const doc = document.documentElement;
const darkBtn = document.getElementById("darkBtn");
const svg = document.getElementsByClassName("svg");
const section = doc.querySelectorAll("section");
const navMenu = document.getElementById("navMenu");
const navA = navMenu.querySelectorAll("a");
const navbar = document.getElementsByClassName("navbar")[0];
const upBtn = document.getElementById("UpBtn");
let currentSection = "home";
// navA.forEach((a) => {
//   a.onclick = () => {
//     activeBtn(a.href.split("#")[1]);
//   };
// });

window.onscroll = () => {
  let val = document.documentElement.scrollTop;
  changeFeq(val);
  if (val == 0) {
    navbar.style.height = "86px";
    upBtn.style.opacity = 0;
    upBtn.style.pointerEvents = "none";
    stop();
  } else {
    navbar.style.height = "56px";
    upBtn.style.opacity = 1;
    upBtn.style.pointerEvents = "auto";
  }
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

function goUp() {
  window.scrollTo(0, 0);
  start();
  setTimeout(() => {
    stop();
  }, 1000);
}

audio = new (window.AudioContext || window.webkitAudioContext)();
osci = audio.createOscillator();
gain = audio.createGain();
gain.gain.value = 0.5;
osci.start();
function start() {
  osci.connect(gain);
  gain.connect(audio.destination);
}
function stop() {
  osci.disconnect();
}
function changeFeq(val) {
  osci.frequency.setValueAtTime(val / 10, audio.currentTime);
}
// function changeGain(val) {
//   gain.gain.value = val / 100;
//   document.body.scrollHeight;
// }
