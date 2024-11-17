document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Fungsi untuk mengatur tab aktif
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      // Menyembunyikan semua konten tab
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Menyembunyikan semua tombol tab
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Menampilkan konten tab yang dipilih
      document.getElementById(target).classList.add('active');

      // Menandai tombol tab sebagai aktif
      this.classList.add('active');
    });
  });

  // Menandai tab pertama sebagai aktif pada saat halaman pertama kali dimuat
  document.getElementById('tab1').classList.add('active');
  document.querySelector('.tab-button').classList.add('active');
});
