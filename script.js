window.onload = () => {
  const fullCurriculum = document.querySelector('.full-curriculum');
  fullCurriculum.style.display = 'none';
}

window.addEventListener('scroll', () => {
  const miniData = document.querySelector('.mini-data');
  const fullCurriculum = document.querySelector('.full-curriculum');

  if (fullCurriculum.style.display === 'none') {
    if (window.scrollY >= 300) {
      miniData.style.display = 'block';
    } else {
      miniData.style.display = 'none';
    }
  } else {
      miniData.style.display = 'block';
  }
}); 

const toggleCurriculumDisplay = (toShow, toHide) => {
  const miniData = document.querySelector('.mini-data');
  const mainPhoto = document.querySelector('.main-photo');
  const fullCurriculum = document.querySelector('.full-curriculum');
  const closeBtn = document.querySelector('.full-curriculum-close');

  miniData.style.display = toShow;
  fullCurriculum.style.display = toShow;
  closeBtn.style.display = toShow;
  mainPhoto.style.display = toHide;
}

const curriculumBtn = document.querySelector('.info-item');

curriculumBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleCurriculumDisplay('inLine', 'none');
});

const closeBtn = document.querySelector('.full-curriculum-close');

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  toggleCurriculumDisplay('none', 'inLine');
});
