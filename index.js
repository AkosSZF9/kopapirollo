/*1. Az új játek gombara kattintva legyen új játéktér*/
/*2. Ha a játékos a kő, papír, olló gombokra kattint, akkor a meglelelő kép jelenjen meg*/
const ujJatekGomb = document.getElementById("ujjatek")
const jatekTer = document.getElementsByClassName("jatekter")/*lista*/

ujJatekGomb.addEventListener("click", megjelenit)
function megjelenit(){
    const htmlKod = `
      <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
    `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek = document.querySelectorAll(".gombok button") /*listát ad */
    gombElemek[0].addEventListener("click", kivalaszt)
}

function kivalaszt(){
    const kep = document.querySelector("#jatekos img")
    console.log(kep)
    console.log(event.target.id)
    kep.src="kepek/ko.PNG"
}