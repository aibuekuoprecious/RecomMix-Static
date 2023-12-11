// Highlight navigation
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav a');

  for (const link of navLinks) {
    link.classList.remove('active');
    if (link.href.endsWith(currentPath)) {
      link.classList.add('active');
    }
  }
}
