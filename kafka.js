window.onload = function () {
  window.scrollTo(0, 0);
};
function nama() {
  let h1 = document.getElementById('h1');
  let inputnama = document.getElementById('inputnama').value;

  h1.classList.remove('text-focus-in');

  setTimeout(() => {
    h1.classList.add('text-focus-in');
    h1.innerHTML = `HALO ${inputnama} SELAMAT DATANG DI WEB SAYA`;
  }, 10);
}

const text = document.querySelector('.text-second');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'FREELANCE   ';
  }, 0);
  setTimeout(() => {
    text.textContent = 'STUDENT';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'JUNIOR DEVELOPER';
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
function mode() {
  let body = document.body;
  body.classList.toggle('dark-mode');
}

// SKILLL SECTION //

function kembali() {
  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.add('text-blur-out');
    setTimeout(() => {
      back[i].style.display = 'none';
    }, 1000);
  }
  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].style.display = 'flex';
    kotakskill[i].classList.add('tengah');
    kotakskill[i].classList.remove('text-blur-out');
    kotakskill[i].classList.add('text-focus-in');
    setTimeout(() => {
      kotakskill[i].style.display = 'block';
    }, 1000);
  }
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.remove('text-blur-out');
    more[i].classList.add('text-focus-in');
    setTimeout(() => {
      more[i].style.display = 'block';
    }, 1000);
  }
}

function html() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].style.display = 'none';
    }, 1000);
  }

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.remove('text-blur-out');
    back[i].classList.add('text-focus-in');
    setTimeout(() => {
      back[i].style.display = 'block';
    }, 1000);
  }
}

const back = document.querySelectorAll('.back');
for (let i = 0; i < back.length; i++) {
  back[i].style.display = 'none';
}

function css() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].style.display = 'none';
    }, 1000);
  }

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.remove('text-blur-out');
    back[i].classList.add('text-focus-in');
    setTimeout(() => {
      back[i].style.display = 'block';
    }, 1000);
  }
}

function javascript() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].style.display = 'none';
    }, 1000);
  }

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.remove('text-blur-out');
    back[i].classList.add('text-focus-in');
    setTimeout(() => {
      back[i].style.display = 'block';
    }, 1000);
  }
}

function bt() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].style.display = 'none';
    }, 1000);
  }

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.remove('text-blur-out');
    back[i].classList.add('text-focus-in');
    setTimeout(() => {
      back[i].style.display = 'block';
    }, 1000);
  }
}

function tailwind() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].style.display = 'none';
    }, 1000);
  }

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.remove('text-blur-out');
    back[i].classList.add('text-focus-in');
    setTimeout(() => {
      back[i].style.display = 'block';
    }, 1000);
  }
}
function setCircleDashoffset(circleId, percentage) {
  const circle = document.getElementById(circleId);
  const radius = circle.getAttribute('r');
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
}

setCircleDashoffset('circle1', 82);
setCircleDashoffset('circle2', 73);
setCircleDashoffset('circle3', 80);

const balik = document.querySelectorAll('.balik');
for (let i = 0; i < balik.length; i++) {
  balik[i].style.display = 'none';
}

function pulang() {
  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.remove('text-blur-out');
    skillsection[i].classList.add('text-focus-in');
    setTimeout(() => {
      skillsection[i].style.display = 'block';
    }, 1000);
  }
  const balik = document.querySelectorAll('.balik');
  for (let i = 0; i < balik.length; i++) {
    balik[i].classList.add('text-blur-out');
    setTimeout(() => {
      balik[i].style.display = 'none';
    }, 1000);
  }
  const softskill = document.querySelectorAll('.softskill');
  for (let i = 0; i < softskill.length; i++) {
    softskill[i].classList.remove('text-blur-out');
    softskill[i].classList.add('text-focus-in');
    setTimeout(() => {
      softskill[i].style.display = 'block';
    }, 1000);
  }
}
function creative() {
  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      skillsection[i].style.display = 'none';
    }, 1000);
  }
  const softskill = document.querySelectorAll('.softskill');
  for (let i = 0; i < softskill.length; i++) {
    softskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      softskill[i].style.display = 'none';
    }, 1000);
  }
  const balik = document.querySelectorAll('.balik');
  for (let i = 0; i < balik.length; i++) {
    balik[i].classList.remove('text-blur-out');
    balik[i].classList.add('text-focus-in');
    setTimeout(() => {
      balik[i].style.display = 'block';
    }, 1000);
  }
}
function public() {
  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      skillsection[i].style.display = 'none';
    }, 1000);
  }
  const softskill = document.querySelectorAll('.softskill');
  for (let i = 0; i < softskill.length; i++) {
    softskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      softskill[i].style.display = 'none';
    }, 1000);
  }
  const balik = document.querySelectorAll('.balik');
  for (let i = 0; i < balik.length; i++) {
    balik[i].classList.remove('text-blur-out');
    balik[i].classList.add('text-focus-in');
    setTimeout(() => {
      balik[i].style.display = 'block';
    }, 1000);
  }
}
function komunikasi() {
  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      skillsection[i].style.display = 'none';
    }, 1000);
  }
  const softskill = document.querySelectorAll('.softskill');
  for (let i = 0; i < softskill.length; i++) {
    softskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      softskill[i].style.display = 'none';
    }, 1000);
  }
  const balik = document.querySelectorAll('.balik');
  for (let i = 0; i < balik.length; i++) {
    balik[i].classList.remove('text-blur-out');
    balik[i].classList.add('text-focus-in');
    setTimeout(() => {
      balik[i].style.display = 'block';
    }, 1000);
  }
}
