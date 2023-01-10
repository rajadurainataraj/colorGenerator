// getting colors changable value
let color = "#e66465";
document.getElementById("head").addEventListener("change", (e) => {
  color = e.target.value;
});

document.querySelector("#btnSubmit").addEventListener("click", () => {
  let values = document.querySelector("#color").value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${color.substring(
      1
    )}&mode=${values}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      let html2 = "";
      data.colors.forEach((item) => {
        html += `<div style="background-color:${item.hex.value}; width:calc(100% / 5)"></div>`;
        html2 += `<div style="background-color:#ffffff;text-align:center; width:calc(100% / 5)">${item.hex.value}</div>`;
      });

      document.getElementById("colorsContainer").innerHTML = html;
      document.getElementById("colorsContainer2").innerHTML = html2;
    });
});

let word = document.querySelectorAll("#colorsContainer2");

word.forEach((item) => {
  item.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    let previous = e.target.innerText;
    e.target.innerText = "copied";
    setTimeout(() => {
      e.target.innerText = previous;
    }, 1500);
  });
});
