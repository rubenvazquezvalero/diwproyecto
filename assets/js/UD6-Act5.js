var ctx=null, canvas=null;

function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  if(medio.currentTime > 0){
      medio.pause();
      medio.currentTime = 0;
      medio.play();
      play.value='||';
      document.body.style.backgroundColor = 'grey';
  }
}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if(medio.currentTime > 0){
	  if(medio.currentTime > 5){
		  medio.currentTime = medio.currentTime -5;
		} else {
		  medio.currentTime = 0;
	  }
  }
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration	
  if(!medio.ended){
	  if(medio.currentTime < medio.duration){
		  medio.currentTime = medio.currentTime + 5;
	  }
  }
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;

	medio.muted = !medio.muted;
	silenciar.value = medio.muted?"escoltar":"silenciar";
	
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
	if(medio.volume < 1){
		medio.volume = medio.volume + 0.1;
	}
}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
	if(medio.volume > 0){
		medio.volume = medio.volume - 0.1;
	}
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);

	// Actividad 5.2
	btns = new Array(4);
	for (let i = 1; i <= 4; i++) {
		btns[i] = document.getElementById('btns-'+i);

		btns[i].addEventListener('click', function(){
			document.getElementById('sound-'+i).play();
		});
	}

	// Actividad 7
	
	canvas=document.getElementById('lienzo');
	ctx=canvas.getContext('2d');

	ctx.fillStyle = "cyan";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "rgba(0, 80, 0, 1)";
	ctx.fillRect(0, 250, 500, 50);

	ctx.fillStyle = "rgba(80, 80, 80, 1)";
	ctx.fillRect(140, 199, 20, 51);

	ctx.beginPath();
	ctx.arc(150, 150, 50, 0, 2*Math.PI);
	ctx.fillStyle = "rgba(80, 80, 0, 1)";
	ctx.fill();
	
	ctx.fillStyle = 'red';
	ctx.beginPath();
	ctx.arc(130, 140, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(150, 150, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(150, 120, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(175, 130, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(178, 170, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(125, 170, 5, 0, 2*Math.PI);
	ctx.fill();
}

window.addEventListener('load', iniciar, false);