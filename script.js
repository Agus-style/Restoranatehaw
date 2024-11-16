const menuData = {
    food: [
        { name: "Sop Iga", 
        description: "Sop hangat dengan rempah.",
         price: 55000, 
         image: "assets/sop-iga.jpg" },        
       
         { name: "Nasi Lemak", 
        description: "Nasi khas Minang.", 
        price: 30000, 
        image: "assets/nasi-lemak.jpg" },
        
    ],
    drinks: [
        { name: "Jus Naga", 
        description: "Jus buah naga segar.", 
        price: 18000, 
        image: "assets/jus-naga.jpg" },
        
        { name: "Jus Strawberry", 
        description: "Jus strawberry segar.", 
        price: 20000, 
        image: "assets/jus-strawberry.jpg" },
    ],
};

const container = document.getElementById("menu-container");

function renderMenu(menuType) {
    container.innerHTML = ""; // Hapus konten sebelumnya
    menuData[menuType].forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.style.animationDelay = `${index * 0.1}s`; // Tambahkan delay untuk efek cascading
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Rp ${item.price.toLocaleString()}</strong></p>
        `;
        container.appendChild(div);
    });
}

// Render makanan sebagai default
renderMenu("food");