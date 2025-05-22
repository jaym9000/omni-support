// main.js
// Toggle between Support & Privacy sections
function showSection(name) {
  const sections = ['support', 'privacy'];
  sections.forEach((key) => {
    document.getElementById(`${key}-section`).classList.remove('active-section');
    const tab = document.getElementById(`${key}-tab`);
    if (tab) tab.classList.remove('active');
  });
  document.getElementById(`${name}-section`).classList.add('active-section');
  const activeTab = document.getElementById(`${name}-tab`);
  if (activeTab) activeTab.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple contact form handler
function submitForm(e) {
  e.preventDefault();
  alert('Thanks! We\'ll reply soon.');
  e.target.reset();
}
