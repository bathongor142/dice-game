// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийн 1 гэж тэмдэглэнэ.

var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө

var dice = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> */
// window.document.querySelector("#score-0").textContent = dice;

// window.document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// Програм эхлэд билдэх
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("Шоо :" + dice);
