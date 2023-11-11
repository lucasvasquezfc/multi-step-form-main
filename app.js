const progress = document.getElementById('progress');
const prev = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.num');

let currentActive = 0;

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

  // const actives = document.querySelectorAll('.active');
  // if (currentActive === 1) {
  //   prev.disabled = true;
  // } else if (currentActive === circles.length) {
  //   next.disabled = true;
  // } else {
  //   prev.disabled = false;
  //   next.disabled = false;
  // }

  console.log(currentActive);
}
