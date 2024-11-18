window.onload = function () {
  window.scrollTo(0, 0);
};

function nama() {
  let h1 = document.getElementById('h1');
  let inputnama = document.getElementById('inputnama').value.trim();

  if (inputnama == '') {
    var myModal = new bootstrap.Modal(document.getElementById('customAlert'));
    myModal.show();
    h1.style.display = 'none';
    return;
  }

  h1.style.display = 'block';
  h1.classList.remove('text-focus-in');

  setTimeout(() => {
    h1.classList.add('text-focus-in');
    h1.innerHTML = `HALO ${inputnama.toUpperCase()} SELAMAT DATANG DI WEB SAYA`;
  }, 10);
}

const text = document.querySelector('.text-second');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'FREELANCE';
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
// ilang section //

const cardhtml = document.querySelector('.ht-ml');
cardhtml.style.display = 'none';

const cardcss = document.querySelector('.cs-s');
cardcss.style.display = 'none';

const cardjs = document.querySelector('.java-script');
cardjs.style.display = 'none';

const cardbs = document.querySelector('.boot-strap');
cardbs.style.display = 'none';

const cardtailwind = document.querySelector('.tail-wind');
cardtailwind.style.display = 'none';

const kirikanan = document.getElementById('kirikanan');
const kemampuan = document.querySelector('.kemampuan');

const ilang = document.querySelector('.skillsection');
ilang.style.display = 'block';

const cardcreative = document.querySelector('.card-creative');
cardcreative.style.display = 'none';

const cardpublic = document.querySelector('.card-public');
cardpublic.style.display = 'none';

const cardkomunikasi = document.querySelector('.card-komunikasi');
cardkomunikasi.style.display = 'none';
// end ilang //

// SKILLL SECTION //

function kembali() {
  cardhtml.classList.add('text-blur-out');
  setTimeout(() => {
    cardhtml.style.display = 'none';
  }, 1000);

  cardcss.classList.add('text-blur-out');
  setTimeout(() => {
    cardcss.style.display = 'none';
  }, 1000);

  cardjs.classList.add('text-blur-out');
  setTimeout(() => {
    cardjs.style.display = 'none';
  }, 1000);

  cardbs.classList.add('text-blur-out');
  setTimeout(() => {
    cardbs.style.display = 'none';
  }, 1000);

  cardtailwind.classList.add('text-blur-out');
  setTimeout(() => {
    cardtailwind.style.display = 'none';
  }, 1000);

  const back = document.querySelectorAll('.back');
  for (let i = 0; i < back.length; i++) {
    back[i].classList.add('text-blur-out');
    setTimeout(() => {
      back[i].style.display = 'none';
    }, 1000);
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.remove('text-blur-out');
    kotakskill[i].classList.add('text-focus-in');
    setTimeout(() => {
      kotakskill[i].classList.add('tengah1');
      kotakskill[i].style.width = '90%';
      kotakskill[i].classList.add('d-flex', 'flex-wrap', 'justify-content-center');
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
  cardhtml.classList.remove('text-blur-out');
  cardhtml.classList.add('text-focus-in');
  setTimeout(() => {
    cardhtml.style.display = 'flex';
    cardhtml.classList.add('tengah');
    cardhtml.style.display = 'block';
  }, 1500);

  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].classList.remove('d-flex', 'flex-wrap', 'justify-content-center');
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
  cardcss.classList.remove('text-blur-out');
  cardcss.classList.add('text-focus-in');
  setTimeout(() => {
    cardcss.style.display = 'flex';
    cardcss.classList.add('tengah');
    cardcss.style.display = 'block';
  }, 1500);

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].classList.remove('d-flex', 'flex-wrap', 'justify-content-center');
      kotakskill[i].style.display = 'none';
    }, 1000);

    const back = document.querySelectorAll('.back');
    for (let i = 0; i < back.length; i++) {
      back[i].classList.remove('text-blur-out');
      back[i].classList.add('text-focus-in');
      setTimeout(() => {
        back[i].style.display = 'block';
      }, 1000);
    }
  }
}
function javascript() {
  const more = document.querySelectorAll('.more');
  for (let i = 0; i < more.length; i++) {
    more[i].classList.add('text-blur-out');
  }
  cardjs.classList.remove('text-blur-out');
  cardjs.classList.add('text-focus-in');
  setTimeout(() => {
    cardjs.style.display = 'flex';
    cardjs.classList.add('tengah');
    cardjs.style.display = 'block';
  }, 1500);

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].classList.remove('d-flex', 'flex-wrap', 'justify-content-center');
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

  cardbs.classList.remove('text-blur-out');
  cardbs.classList.add('text-focus-in');
  setTimeout(() => {
    cardbs.style.display = 'flex';
    cardbs.classList.add('tengah');
    cardbs.style.display = 'block';
  }, 1500);

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].classList.remove('d-flex', 'flex-wrap', 'justify-content-center');
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

  cardtailwind.classList.remove('text-blur-out');
  cardtailwind.classList.add('text-focus-in');
  setTimeout(() => {
    cardtailwind.style.display = 'flex';
    cardtailwind.classList.add('tengah');
    cardtailwind.style.display = 'block';
  }, 1500);

  const kotakskill = document.querySelectorAll('.kotakskill');
  for (let i = 0; i < kotakskill.length; i++) {
    kotakskill[i].classList.add('text-blur-out');
    setTimeout(() => {
      kotakskill[i].classList.remove('d-flex', 'flex-wrap', 'justify-content-center');
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
  cardcreative.classList.add('text-blur-out');
  setTimeout(() => {
    cardcreative.style.display = 'none';
  }, 1000);

  cardpublic.classList.add('text-blur-out');
  setTimeout(() => {
    cardpublic.style.display = 'none';
  }, 1000);

  cardkomunikasi.classList.add('text-blur-out');
  setTimeout(() => {
    cardkomunikasi.style.display = 'none';
  }, 1000);

  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.remove('text-blur-out');
    skillsection[i].classList.add('text-focus-in');
    setTimeout(() => {
      kirikanan.style.display = 'block';
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
  cardcreative.classList.remove('text-blur-out');
  cardcreative.classList.add('text-focus-in');
  setTimeout(() => {
    kemampuan.style.width = '100%';
    kemampuan.classList.add('tengah');
    cardcreative.style.display = 'block';
  }, 1000);

  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      kirikanan.style.display = 'none';
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
  cardpublic.classList.remove('text-blur-out');
  cardpublic.classList.add('text-focus-in');
  setTimeout(() => {
    kemampuan.style.width = '100%';
    kemampuan.classList.add('tengah');
    cardpublic.style.display = 'block';
  }, 1000);

  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      kirikanan.style.display = 'none';
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
  cardkomunikasi.classList.remove('text-blur-out');
  cardkomunikasi.classList.add('text-focus-in');
  setTimeout(() => {
    kemampuan.style.width = '100%';
    kemampuan.classList.add('tengah');
    cardkomunikasi.style.display = 'block';
  }, 1000);

  const skillsection = document.querySelectorAll('.skillsection');
  for (let i = 0; i < skillsection.length; i++) {
    skillsection[i].classList.add('text-blur-out');
    setTimeout(() => {
      kirikanan.style.display = 'none';

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
