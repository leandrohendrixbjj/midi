function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

let keyboardList = document.querySelectorAll('.tecla');

for (let row in keyboardList) {

  let tecla = keyboardList[row];

  if (Number.isInteger(parseInt(row))) {
    let btnClassName = keyboardList[row].classList['1'];

    keyboardList[row].onclick = () => {
      console.log(btnClassName);
      tocaSom(`#som_${btnClassName}`);
    }
  }

  tecla.onkeydown = () => {
    tecla.classList.add('ativa');
  }

  tecla.onkeydown = () => {
    tecla.classList.remove('ativa');
  }
}