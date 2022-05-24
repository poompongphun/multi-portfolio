const doc = document.documentElement;
const darkBtn = document.getElementById("darkBtn");
const svg = document.getElementsByClassName("svg");
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
  } else {
    // ดำ
    doc.style.setProperty("--bgColorST", "hsl(231, 30%, 13%)");
    doc.style.setProperty("--bgColorND", "hsl(232, 38%, 11%)");
    doc.style.setProperty("--bgColorRD", "hsl(231, 40%, 10%)");
    doc.style.setProperty("--primary", "hsl(229, 100%, 69%)");
    doc.style.setProperty("--normal", "hsl(231, 24%, 72%)");
    doc.style.setProperty("--btnColor", "hsl(229, 32%, 17%)");
    doc.style.setProperty("--bl", "white");
  }
  for (let i = 0; i < svg.length; i++) {
    const ele = svg[i];
    ele.style.fill = doc.style.getPropertyValue("--bl");
  }
}
