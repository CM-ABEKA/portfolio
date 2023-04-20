//  Small screen
const domElement = document.documentElement.innerHTML;
function checkViewportWidth() {
  if (window.innerWidth < 774) {
    // Viewport width is less than 768 pixels, display message
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.innerHTML = '<div id="mask_dom"><h1>Screen Too Small</h1><p>Please view this page on a larger screen.</p><a href="https://github.com/CM-ABEKA/portfolio/blob/main/chris_portfolio.pdf" download>Download Pdf</a></div>';
  } else {
    // Viewport width is sufficient, return to normal
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.innerHTML = domElement;
  }
}

// Check viewport width on page load
checkViewportWidth();

// Add resize event listener to check viewport width on resize
window.addEventListener('resize', checkViewportWidth);



// Projects
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const image = card.getAttribute('data-image');
  card.style.setProperty('--card-image', `url('path/to/${image}')`);
});



