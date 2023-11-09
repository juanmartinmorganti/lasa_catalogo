// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Kraft Nº0',
        price: 3998.45,
        image: '/BK/img/1_0.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 12cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
        
    {
        name: 'Kraft Nº1',
        price: 4184.81,
        image: '/BK/img/2_1.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 14cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº1L',
        price: 4534.17,
        image: '/BK/img/3_1L.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 16cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº2',
        price: 4969.99,
        image: '/BK/img/4_2.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 16,5cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº2L',
        price: 5093.23,
        image: '/BK/img/5_2L.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 21cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº2x10L',
        price: 10283.82,
        image: '/BK/img/6_2-10L.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 56cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº3',
        price: 5559.05,
        image: '/BK/img/7_3.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 23cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº3L',
        price: 5931.69,
        image: '/BK/img/8_3L.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº3A',
        price: 5566.82,
        image: '/BK/img/9_3A.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 23cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº4',
        price: 6327.68,
        image: '/BK/img/10_4.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº4A',
        price: 6180.17,
        image: '/BK/img/11_4A.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 22,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº5',
        price: 7135.15,
        image: '/BK/img/12_5.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 30.5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº5x10L',
        price: 13576.11,
        image: '/BK/img/13_5-10L.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 56cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº6',
        price: 8066.80,
        image: '/BK/img/14_6.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 29,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº6L',
        price: 9029.55,
        image: '/BK/img/15_6L.jpg',
        ancho: 'Ancho:15cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº7',
        price: 10729.90,
        image: '/BK/img/16_7.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº7L',
        price: 3998.45,
        image: '/BK/img/17_7L.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 38cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº8',
        price: 13338.44,
        image: '/BK/img/18_8.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 42cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº9',
        price: 14875.86,
        image: '/BK/img/19_9.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 48cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº10',
        price: 24293.62,
        image: '/BK/img/20_10.jpg',
        ancho: 'Ancho: 24,5cm',
        largo: 'Largo: 48cm',
        fuelle: 'Fuelle: 8cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Kraft Nº10L',
        price: 28959.80,
        image: '/BK/img/21_10L.jpg',
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
