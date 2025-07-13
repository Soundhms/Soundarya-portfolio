function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('about'); // Show About section by default
});
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
