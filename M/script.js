// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Moldes para Pan Dulce 100gr Fantasia',
        price: 0.00,
        image: 'M/img/MPD_1.jpg',
        ancho: '',
        largo: 'Altura: 60mm',
        diametro: 'Diametro: 70mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Pan Dulce de ¼ kg Fantasia',
        price: 28083.65,
        image: 'M/img/MPD_2.jpg',
        ancho: '',
        largo: 'Altura: 70mm',
        diametro: 'Diametro: 90mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Pan Dulce de ½ kg Fantasia',
        price: 33873.79,
        image: 'M/img/MPD_3.jpg',
        ancho: '',
        largo: 'Altura: 110mm',
        diametro: 'Diametro: 110mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Pan Dulce de ¾ kg Fantasia',
        price: 37893.54,
        image: 'M/img/MPD_4.jpg',
        ancho: '',
        largo: 'Altura: 120mm',
        diametro: 'Diametro: 130mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Pan Dulce de 1 kg Fantasia',
        price: 39791.25,
        image: 'M/img/MPD_5.jpg',
        ancho: '',
        largo: 'Altura: 120mm',
        diametro: 'Diametro: 140mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes Savarin Nº18',
        price: 84826.92,
        image: 'M/img/S_1.jpg',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 180mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes Savarin Nº20',
        price: 88964.83,
        image: 'M/img/S_2.jpg',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 200mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes Savarin Nº22',
        price: 93102.73,
        image: 'M/img/S_3.jpg',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 220mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes Savarin Nº24',
        price: 96512.79,
        image: 'M/img/S_4.jpg',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 240mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes Savarin Nº26',
        price: 102332.05,
        image: 'M/img/S_5.jpg',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 260mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Bizcochuelo Nº18 Fantasía',
        price: 72413.23,
        image: 'M/img/MB_1.JPG',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 180mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Bizcochuelo Nº20 Fantasía',
        price: 76551.14,
        image: 'M/img/MB-2.JPG',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 200mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Bizcochuelo Nº22 Fantasía',
        price: 80689.02,
        image: 'M/img/MB_3.JPG',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 220mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Bizcochuelo Nº24 Fantasía',
        price: 83823.24,
        image: 'M/img/MB_4.JPG',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 240mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Moldes para Bizcochuelo Nº26 Fantasía',
        price: 88014.40,
        image: 'M/img/MB_5.JPG',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 260mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Budinera con  fleje de carton p/300grs',
        price: 0.00,
        image: 'M/img/bud_1.png',
        ancho: '',
        largo: 'Altura: 50mm',
        diametro: 'Diametro: 260mm',
        unidad: 'Unidad x Bulto: 1000'
    },
    {
        name: 'Budinera con  fleje de carton p/500grs',
        price: 63805.20,
        image: 'M/img/bud_2.png',
        ancho: 'Ancho: 80mm',
        largo: 'Altura: 60mm',
        diametro: 'Largo: 180mm',
        unidad: 'Unidad x Bulto: 1000'
    },
  
    

];

// Función para agregar productos al catálogo
function renderProducts() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            
            <p><strong>${product.ancho}</strong></p>
            <p>${product.largo}</p>
            <p>${product.diametro}</p>
            <p>${product.unidad}</p>
        `;

        container.appendChild(productDiv);
    });
}

// Llama a la función para renderizar los productos al cargar la página
renderProducts();
