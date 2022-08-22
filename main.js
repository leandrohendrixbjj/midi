function playPom(){
    document.querySelector("#som_tecla_pom").play();
}

//document.querySelector(".tecla_pom").onclick = playPom;

let list = document.querySelectorAll('.tecla');

list.forEach(l => {
    console.log(l);
});


