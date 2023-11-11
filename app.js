const progress = document.getElementById('progress');
const prev = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.num');

let currentActive = 0;
let circlesLength = circles.length;

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', () => {
    let a = circles[i].innerText;
    currentActive = a - 1;
    update();
  });
}

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  if (currentActive > 3) {
    currentActive = 3;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 0) {
    currentActive = 0;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (currentActive == 4) {
      next.disabled = true;
      return;
    } else {
      next.disabled = false;
    }

    if (idx == currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}
