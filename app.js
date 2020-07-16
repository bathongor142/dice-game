// Тоглоомын бүх газарт ашиглдах төлөвийн хувьсагч
var isNewgame;
// тогломын бүх газар ашиглагдах хувьсагч
var activePlayer;
// хоёр тоглогчын цуглуулсан оноо
var scores;
//идвэхтэй тоглогчын цуглуулсан онооо
var roundScore;
//Шооны зургийг үзүүлэх элемент DOM-ooс олоод хадгалах
var diceDom = document.querySelector(".dice");
//тогломыг эхлүүлнэ
initGame();
// тогломыг шинээр эхэлхэд билдэн
function initGame() {
  //тоглоом эхэллээ гэдэг төлөвт оруулна
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийн 1 гэж тэмдэглэнэ.

  activePlayer = 0;

  //Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

  // Програм эхлэд билдэх

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    // 1-6 дотор санамсаргүй тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шоо зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = "block";
    // буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";
    //буусан тоон нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийг оноог нэмэгдүүлнэ.
    if (diceNumber !== 10) {
      //   1 ээс Ялгаатай тоо буулгаа. Буусан тоог тоглогчид нэмж өгнө
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //   1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглом дуусан байна. new game товчийг дарааж шинээр эхэл");
  }
});
// HOLD товчны эвент листнер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
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
    if (scores[activePlayer] >= 100) {
      //Тогломыг дуусан төлөвт оруулна
      isNewGame = false;
      // Ялагч гэсэн текс нэр оронд гарган
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    }

    //Тоглогчийн ээлжийг солино
    switchToNextPlayer();
  } else {
    alert("Тоглом дуусан байна. new game товчийг дарааж шинээр эхэл");
  }
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
// newgame товчыг дарвал шинэ тоглом эхлүүлэх товчны эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
