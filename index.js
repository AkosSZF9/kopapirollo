/* 1. Az új játék gombra kattintva legyen új játékterünk */

/* Ha a játékos a kő/papír/olló gombokra kattint, akkor a megfelelő kép jelenjen meg */

const ujJatekGomb=document.getElementById("ujjatek");
const jatekTer=document.getElementsByClassName("jatekter");

console.log(jatekTer)
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit(){
    const htmlKod=`
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
    const gombElemek=document.querySelectorAll(".gombok button") /* listát kapunk */
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
    
}

function kivalaszt(event){
  const kep=document.querySelector("#jatekos img")
  console.log(event.target)
  console.log(event.target.id)
  kep.src = `kepek/${event.target.id}.PNG`
  gepvalasztasa(event.target.id)
}
const TIPPLISTA = ["ko", "papir", "ollo"]
function gepvalasztasa(jatekosvalasztas){
  /*véletlen számok generálása, számok alapján kiválasztás*/
  const kep = document.querySelector("#gep img")
  console.log(kep)
  let veletlen = Math.floor(Math.random()*3)
  console.log(veletlen)
  let gepTipp = TIPPLISTA(veletlen)
  kep.src = `kepek/${gepTipp}.PNG`
  ellenorzes(veletlen, jatekosvalasztas)
}

function ellenorzes(veletlen,jatekosvalasztas){
  /*Össze kell hasonlítani a gép és a játékos választását*/
  /*Gép választása: véletlen*/
  /*Játékos választása: event.targer.id*/

  /*Ezek a feltételek mikor a játékos nyer:*/
  let f1=(jatekosvalasztas =="ko" && veletlen == 2)
  let f2=(jatekosvalasztas =="papir" && veletlen == 0)
  let f3=(jatekosvalasztas =="ollo" && veletlen == 1)

 /*Feltételek mikor a gép nyer:*/
  let f4=(jatekosvalasztas =="ko" && veletlen == 1)
  let f5=(jatekosvalasztas =="papir" && veletlen == 2)
  let f6=(jatekosvalasztas =="ollo" && veletlen == 0)

  /*Feltételek mikor döntetlen:*/ //nem kell
  /*let f7=(jatekosvalasztas =="ko" && veletlen == 0)
  let f8=(jatekosvalasztas =="papir" && veletlen == 1)
  let f9=(jatekosvalasztas =="ollo" && veletlen == 2)*/

  let szoveg=""
  if (f1 || f2 || f3){
    szoveg ="Játékos nyert"
  }
  else if(f4 || f5 || f6){
    szoveg ="Gép nyert"
  }
  else{
    szoveg ="Döntetlen"
  }

  const kiirtElem = document.getElementById("gyoztes")
  kiirtElem.innerHTML = `<p>${szoveg}</p>`
}

