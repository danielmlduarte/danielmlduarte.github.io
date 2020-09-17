window.addEventListener('scroll', () => {
  const miniData = document.querySelector('.mini-data');

  if (window.scrollY >= 300) {
    miniData.style.display = 'block';
  } else {
    miniData.style.display = 'none';
  }
});