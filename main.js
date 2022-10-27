function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

let keyboardList = document.querySelectorAll('.tecla');

let cont = 0;
while (cont < keyboardList.length) {

  let btnClassName = keyboardList[cont].classList[1];

  keyboardList[cont].onclick = () => {
    tocaSom(`#som_${btnClassName}`);
  }
  cont++;
}
