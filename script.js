// Fungsi untuk menampilkan tab yang dipilih
function showTab(tabName) {
  // Ambil semua tab konten dan sembunyikan
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Ambil semua tombol tab dan hapus kelas 'active'
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Tampilkan tab yang dipilih dan beri kelas 'active' pada tombol yang dipilih
  document.getElementById(tabName).style.display = 'block';
  const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabName}')"]`);
  activeButton.classList.add('active');
}

// Set tab 'food' sebagai default yang terlihat
document.addEventListener("DOMContentLoaded", () => {
  showTab('food');
});
