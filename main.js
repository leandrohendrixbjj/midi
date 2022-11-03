function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

let keyboardList = document.querySelectorAll('.tecla');
for (let row in keyboardList) {

  let tecla = keyboardList[row];

  if (Number.isInteger(parseInt(row))) {
    let btnClassName = keyboardList[row].classList['1'];

    keyboardList[row].onclick = () => {
      tocaSom(`#som_${btnClassName}`);
    }
  }

  // Teclado Press
  tecla.onkeydown = (event) => {
    if (event.code == 'Space' || event.code == 'Enter')
      tecla.classList.add('ativa');
  }

  // Teclado Holding
  tecla.onkeyup = (event) => {
    tecla.classList.remove('ativa');
  }
}