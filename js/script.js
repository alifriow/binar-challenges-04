//aturan
let pilihanCom = document.querySelectorAll("#com-result div");
let textResult = document.querySelectorAll("#text-result div");
let randomNumber = Math.floor(Math.random() * 3);
let index = 0;
let indexSkor = 0;
let randomSementara = 0;

function checkHasil(result) {
  for (let i = 0; i < textResult.length; i++) {
    if (textResult[i].classList.contains(result)) {
      // console.log(textResult[i]);
      indexSkor = i;
      textResult[0].classList.add("hidden");
      textResult[i].classList.remove("hidden");
    }
  }
}

//player
const playersInput = document.querySelectorAll("#players-input div");

for (let i = 0; i < playersInput.length; i++) {
  playersInput[i].addEventListener("click", () => {
    index = i;

    pilihanCom[randomNumber].classList.add("bg-abu-abu");
    playersInput[i].classList.add("bg-abu-abu");

    let result = "";
    //jika imbang
    if (i == randomNumber) {
      result = "imbang";
      console.log(result);
      checkHasil(result);

      //   jika tidak imbang
    } else {
      // jika player batu
      if (i === 0) {
        result = randomNumber == 1 ? "kalah" : "menang";
        checkHasil(result);

        // jika player kertas
      } else if (i === 1) {
        result = randomNumber == 2 ? "kalah" : "menang";
        checkHasil(result);

        // jika player gunting
      } else if (i === 2) {
        result = randomNumber == 0 ? "kalah" : "menang";
        checkHasil(result);
      }
    }
  });
}

//com
randomSementara = randomNumber;

//refresh
const refresh = document.querySelector(".refresh");
const refreshImg = document.querySelector(".refresh img");

refresh.addEventListener("click", () => {
  refreshImg.classList.add("transform");
  refreshImg.classList.add("transition");
  refreshImg.classList.add("duration-100");
  randomNumber = Math.floor(Math.random() * 3);
  randomSementara = randomNumber;

  if (refreshImg.classList.contains("rotate-180")) {
    refreshImg.classList.remove("rotate-180");
  } else {
    refreshImg.classList.add("rotate-180");
  }

  pilihanCom.forEach((item) => {
    item.classList.remove("bg-abu-abu");
  });

  playersInput[index].classList.remove("bg-abu-abu");
  textResult[indexSkor].classList.add("hidden");
  textResult[0].classList.remove("hidden");
});
