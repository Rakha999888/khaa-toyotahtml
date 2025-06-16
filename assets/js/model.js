// Fungsi untuk menampilkan model kendaraan yang dipilih
function showModel() {
  const selectedModel = document.getElementById("modelSelect").value;
  
  // Sembunyikan semua bagian model terlebih dahulu
  document.querySelectorAll('.model-section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Tampilkan bagian model yang dipilih
  if (selectedModel) {
    const selectedSection = document.getElementById(selectedModel);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
}

// Inisialisasi event listener saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi model yang akan ditampilkan
  showModel();
  
  // Tambahkan event listener untuk select box
  const modelSelect = document.getElementById('modelSelect');
  if (modelSelect) {
    modelSelect.addEventListener('change', showModel);
  }
});
