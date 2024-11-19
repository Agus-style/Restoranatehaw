document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = document.getElementById('cart');
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');
  const sendOrderButton = document.getElementById('send-order');
  const cancelOrderButton = document.getElementById('cancel-order');
  
  let cartItems = [];
  let totalPrice = 0;

  // Fungsi untuk mengatur tab aktif
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      tabContents.forEach(content => content.classList.remove('active'));
      tabButtons.forEach(btn => btn.classList.remove('active'));

      document.querySelector(target).classList.add('active');
      this.classList.add('active');

      // Menampilkan keranjang hanya untuk tab Menu Makanan dan Menu Minuman
      if (target === '#tab1' || target === '#tab2') {
        cart.style.display = 'block';
      } else {
        cart.style.display = 'none';
      }
    });
  });

  // Fungsi untuk menambahkan item ke keranjang
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const name = this.getAttribute('data-name');
      const price = parseInt(this.getAttribute('data-price'), 10);

      if (isNaN(price)) {
        alert('Harga tidak valid!');
        return;
      }

      const existingItem = cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }

      totalPrice += price;
      updateCart();
    });
  });

  // Fungsi untuk memperbarui keranjang
  function updateCart() {
    cartList.innerHTML = '';
    cartItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name} x${item.quantity} - Rp ${item.price * item.quantity}</span>
        <button class="remove-item" data-index="${index}">Hapus 1</button>
      `;
      cartList.appendChild(li);
    });

    totalPriceElement.textContent = `Total: Rp ${totalPrice}`;

    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
      button.addEventListener('click', function () {
        const itemIndex = parseInt(this.getAttribute('data-index'));
        removeFromCart(itemIndex);
      });
    });
  }

  // Fungsi untuk menghapus item dari keranjang
  function removeFromCart(index) {
    const item = cartItems[index];
    if (item.quantity > 1) {
      item.quantity -= 1;
      totalPrice -= item.price;
    } else {
      totalPrice -= item.price * item.quantity;
      cartItems.splice(index, 1);
    }
    updateCart();
  }
// Fungsi untuk mengirim pesanan ke WhatsApp
sendOrderButton.addEventListener('click', function () {
  if (cartItems.length === 0) {
    alert('Keranjang kosong. Silakan pilih menu terlebih dahulu.');
    return;
  }

  const orderDetails = cartItems.map(item => `${item.name} x${item.quantity}`).join('\n');
  const whatsappMessage = `Pesanan saya:\n${orderDetails}`;

  // Nomor WhatsApp tanpa tanda "+"
  const phoneNumber = '6288271848203'; // Ganti dengan nomor WhatsApp Anda
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Membuka WhatsApp dengan pesan yang sudah terisi
  window.open(whatsappUrl, '_blank');
});
  // Fungsi untuk membatalkan pesanan
  cancelOrderButton.addEventListener('click', function () {
    cartItems = [];
    totalPrice = 0;
    updateCart();
  });
});
