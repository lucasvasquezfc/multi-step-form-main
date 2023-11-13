const progress = document.getElementById('progress');
const prev = document.getElementById('back');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.num');
const box = document.querySelector('.content_box_items');
const pages = document.querySelectorAll('.pages');

function display() {
  pages.forEach((page, index) => {
    if (index == currentActive) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }

    if (currentActive == 0) {
      prev.style.visibility = 'hidden';
    } else {
      prev.style.visibility = 'visible';
    }
    if (currentActive == 4) {
      next.style.visibility = 'hidden';
    } else {
      next.style.visibility = 'visible';
    }
  });
}

function changeDisplay() {
  if (currentActive == 0) {
    prev.style.visibility = 'hidden';
    firstPage.style.display = 'block';
  } else {
    prev.style.visibility = 'visible';
    firstPage.style.display = 'none';
  }

  if (currentActive == 1) {
    secondPage.style.display = 'block';
  } else {
    secondPage.style.display = 'none';
  }

  if (currentActive == 2) {
    thirdPage.style.display = 'block';
  } else {
    thirdPage.style.display = 'none';
  }

  if (currentActive == 3) {
    fourthPage.style.display = 'block';
  } else {
    fourthPage.style.display = 'none';
  }

  if (currentActive == 4) {
    fifthPage.style.display = 'block';
    next.style.visibility = 'hidden';
  } else {
    fifthPage.style.display = 'none';
    next.style.visibility = 'visible';
  }
}

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

    display();
    // changeDisplay();
  });
}

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
