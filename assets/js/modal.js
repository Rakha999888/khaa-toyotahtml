// Get the modal and button elements
const modal = document.getElementById('companyModal');
const logoBtn = document.getElementById('logoBtn');
const closeBtn = document.querySelector('.close-modal');

// Function to open the modal
function openModal() {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to close the modal
function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listeners
logoBtn.addEventListener('click', function(e) {
  e.preventDefault();
  openModal();
});

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
