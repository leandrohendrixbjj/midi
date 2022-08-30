function playPom(){
    document.querySelector("#som_tecla_pom").play();
}

//document.querySelector(".tecla_pom").onclick = playPom;

let keyboardList = document.querySelectorAll('.tecla');

for(let row in keyboardList){
    console.log(keyboardList[row]);
   keyboardList[row].onclick = playPom;
}
