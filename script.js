const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

document.body.innerHTML = `

<div class="voyage">

<h1>🌍 Le voyage commence...</h1>

<p>Ton cadeau quitte Béjaïa pour rejoindre Sherbrooke.</p>

<div class="cities">
<span>📍 Béjaïa 🇩🇿</span>
<span>📍 Sherbrooke 🇨🇦</span>
</div>

<div class="progress">
<div id="gift">🎁✈️</div>
</div>

<p id="distance">Distance restante : 6100 km</p>

</div>

`;

const distance=document.getElementById("distance");

const gift=document.getElementById("gift");

let km=6100;
let pos=0;

const interval=setInterval(()=>{

km-=200;

pos+=3;

gift.style.left=pos+"%";

distance.innerHTML="Distance restante : "+Math.max(km,0)+" km";

if(km<=0){

clearInterval(interval);

document.body.innerHTML=`

<div class="container">

<h1>🎉 Le cadeau est arrivé !</h1>

<p>📍 Sherbrooke 🇨🇦</p>

<button id="openGift">🎁 Ouvrir le cadeau</button>

</div>

`;

document.getElementById("openGift").onclick=ouvrirCadeau;

}

},120);

});

function ouvrirCadeau(){

document.body.innerHTML=`

<div class="container">

<h1>🎂 Joyeux anniversaire Yani 💙</h1>

<div style="font-size:120px;">🎂</div>

<p>

J'avais envie de te préparer une petite surprise.

Alors ce cadeau a voyagé de Béjaïa jusqu'à Sherbrooke juste pour arriver jusqu'à toi.

J'espère qu'il te fera sourire.

Passe une merveilleuse journée et profite pleinement de ton anniversaire. 🎉

</p>

</div>

`;

}
