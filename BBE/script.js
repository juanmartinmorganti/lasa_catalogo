// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Blanca Extra Nº1',
        price: 7444.00,
        image: '/BBE/img/BE_1.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 14cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
        
    {
        name: 'Blanca Extra Nº1L',
        price: 8089.20,
        image: '/BBE/img/BE_1L.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 16cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº2',
        price: 8956.67,
        image: '/BBE/img/BE_2.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 16,5cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº2L',
        price: 10115.12,
        image: '/BBE/img/BE_2L.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 21cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº2L PORORO',
        price: 13311.63,
        image: '/BBE/img/BE_2Lpororo.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 21cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº2x10L',
        price: 22715.16,
        image: '/BBE/img/BE_2Lx10L.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 56cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº3',
        price: 10552.99,
        image: '/BBE/img/BE_3.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 23cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº3L',
        price: 12665.80,
        image: '/BBE/img/BE_3L.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº4',
        price: 14461.08,
        image: '/BBE/img/BE_4.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº4A',
        price: 14154.55,
        image: '/BBE/img/BE_4A.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 22,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº5',
        price: 16573.84,
        image: '/BBE/img/BE_5.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 30,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº5x10L',
        price: 30272.28,
        image: '/BBE/img/BE_5X10L.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 56cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº6',
        price: 18423.94,
        image: '/BBE/img/BE_6.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 29,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº6L',
        price: 20777.53,
        image: '/BBE/img/BE_6L.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº7',
        price: 26909.67,
        image: 'BBE/img/BE_7.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº7L',
        price: 28013.54,
        image: 'BBE/img/BE_7L.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 38cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº8',
        price: 30246.76,
        image: 'BBE/img/BE_8.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 42cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº9',
        price: 34209.62,
        image: 'BBE/img/BE_9.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 48cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº10',
        price: 44970.57,
        image: 'BBE/img/BE_10.jpg',
        ancho: 'Ancho:24,5cm',
        largo: 'Largo: 48cm',
        fuelle: 'Fuelle: 8cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº10L',
        price: 49491.73,
        image: 'BBE/img/BE_10L.jpg',
        ancho: 'Ancho: 24,5cm',
        largo: 'Largo: 56cm',
        fuelle: 'Fuelle: 8cm',
        unidad: 'Unidad: Millar'
    }
   
    

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
            <p>${product.fuelle}</p>
            <p>${product.unidad}</p>
        `;

        container.appendChild(productDiv);
    });
}

// Llama a la función para renderizar los productos al cargar la página
renderProducts();

