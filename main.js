function playPom(){
    document.querySelector("#som_tecla_clap").play();
}

let keyboardList = document.querySelectorAll('.tecla');
let cont = 0;


while(cont < keyboardList.length){ 
  keyboardList[cont].onclick = playPom;    
  cont++;
}
