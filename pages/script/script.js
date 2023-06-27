window.onload = function () {
  let loadingTime = document.getElementById("loadingTime");
  let times = 0;

  // 定义计时器函数
  function goTime() {
    setInterval(updateTimer, 1000); // 每秒更新一次计时器
  }

  // 更新计时器
  function updateTimer() {
    times + 1;
    loadingTime.innerText = "加载中..." + times + "s";
  }
  goTime();
};
//加载van成后隐藏计时器同时进行下一步...
window.document.addEventListener("DOMContentLoaded", function () {
  let loadingTime = document.getElementById("loadingTime");
  let buttons0 = document.getElementById("buttons0");

  loadingTime.style.display = "none";
  if (buttons0.style.display === "none") {
    buttons0.style.display = "block";
  }

  //....
});

//唱后进行下一步...
function button1() {
  let start1 = document.getElementById("audio0");
  let ground = document.getElementById("ground");
  //唱、跳、rap、篮球，music
  if (start1.paused) {
    start1.play();
    start1.setAttribute("loop", "loop");
    ground.style.display = "none";
  }
}
