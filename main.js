function tocaSom(idElementoAudio){
   console.log(idElementoAudio);
    //document.querySelector(idElementoAudio).play();
}

let keyboardList = document.querySelectorAll('.tecla');
let cont = 0;


while(cont < keyboardList.length){ 
  keyboardList[cont].onclick = tocaSom;    
  cont++;
}
