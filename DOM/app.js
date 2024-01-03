/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux 
quand on clique un bouton.  
Quand la div revient à son point 
d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

const divMove = document.querySelector('.red');
const modal = document.querySelector('.modal');
const button = document.getElementById('moveDiv');
const modalButton = document.getElementById('hideModal');
let position = 1;
let isModalVisible = false;

button.addEventListener('click', function() {
  switch (position) {
    case 1:
      divMove.style.transform = 'translate(0, 0)';
      position = 2;
      break;

    case 2:
      divMove.style.transform = 'translate(calc(100% - 100px), 0)';
      position = 3;
      break;

    case 3:
      divMove.style.transform = 'translate(calc(100% - 100px), calc(100% - 100px))';
      position = 4;
      break;

    case 4:
      divMove.style.transform = 'translate(0, calc(100% - 100px))';
      position = 1;
      break;
  }

  if (position === 1 && !isModalVisible) {
    modal.style.display = 'block';
    isModalVisible = true;
  }
});

modalButton.addEventListener('click', function() {
  if (isModalVisible) {
    modal.style.display = 'none';
    isModalVisible = false;
  } else {
    modal.style.display = 'block';
    isModalVisible = true;
  }
});



// Mouvement avec les fleches du clavier


document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowLeft':
        moveSquare('left');
        break;
      case 'ArrowRight':
        moveSquare('right');
        break;
      default:
        break;
    }
  });
  
  function moveSquare(direction) {
    switch (position) {
      case 1:
        if (direction === 'right') {
          divMove.style.transform = 'translate(calc(100% - 100px), 0)';
          position = 2;
        }
        break;
  
      case 2:
        if (direction === 'left') {
          divMove.style.transform = 'translate(0, 0)';
          position = 1;
        } else {
          divMove.style.transform = 'translate(calc(100% - 100px), calc(100% - 100px))';
          position = 4;
        }
        break;
  
      case 4:
        if (direction === 'left') {
          divMove.style.transform = 'translate(0, 0)';
          position = 3;
        } else {
          divMove.style.transform = 'translate(0, calc(100% - 100px))';
          position = 2;
        }
        break;
  
      case 3:
        if (direction === 'right') {
          divMove.style.transform = 'translate(calc(100% - 100px), calc(100% - 100px))';
          position = 4;
        }
        break;
  
      default:
        break;
    }
  
    if (position === 1 && !isModalVisible) {
      modal.style.display = 'block';
      isModalVisible = true;
    }
  }