// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийн 1 гэж тэмдэглэнэ.

var activePlayer = 0;

//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө

// Програм эхлэд билдэх

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 дотор санамсаргүй тоо гаргаж авна
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шоо зургийг вэб дээр гаргаж ирнэ
  diceDom.style.display = "block";
  // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
  diceDom.src = "dice-" + diceNumber + ".png";
  //буусан тоон нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийг оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    //   1 ээс Ялгаатай тоо буулгаа. Буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //   1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    switchToNextPlayer();
  }
});

// HOLD товчны эвент листнер
document.querySelector(".btn-hold").addEventListener("click", function () {
  //Уг тоглогчийн цугуулсан ээлжийн оноог глобаль оноон дээр нь нэмж өгнө
  // if (activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  // Дэлгэц дээр оноог өөрчилнө
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //Уг тоглогч хожисон эсгийг шалгах(оноо нь 100 аас их эсэх) шалгах
  if (scores[activePlayer] >= 20) {
    // Ялагч гэсэн текс нэр оронд гарган
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
  }

  //Тоглогчийн ээлжийг солино
  switchToNextPlayer();
});

// Энэ функц нь тоглох ээлжийг солин
function switchToNextPlayer() {
  //энэ тоглогчийн ээлжиндээ цуглуулсан оноог нойлно
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //шоог түр алга болгон
  diceDom.style.display = "none";
}
//Шинэ тоглом эхлүүлэх товчны эвент листенер
