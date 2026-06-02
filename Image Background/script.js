// var imgBox = document.querySelector(".imgBox");
// var imgWrap = document.querySelector(".imgWrap");
// var originalImg = document.getElementById('originalImg');
// var line = document.getElementById('line');

// originalImg.style.width = imgBox.offsetWidth + "px";

// var leftSpace = imgBox.offsetLeft;
// imgBox.onmousemove = function(e){
//     var boxWidth = (e.pageX - leftSpace)+ "px";
//     imgWrap.style.width = boxWidth;
//     line.style.left = boxWidth;
// }
window.addEventListener("DOMContentLoaded", () => {
  const imgBox = document.querySelector(".imgBox");
  const imgWrap = document.querySelector(".imgWrap");
  const originalImg = document.getElementById("originalImg");
  const line = document.getElementById("line");

  if (!imgBox || !imgWrap || !originalImg || !line) return;

  originalImg.style.width = imgBox.offsetWidth + "px";

  imgBox.addEventListener("mousemove", (e) => {
    const boxWidth = e.pageX - imgBox.getBoundingClientRect().left + window.scrollX;
    imgWrap.style.width = boxWidth + "px";
    line.style.left = boxWidth + "px";
  });
});