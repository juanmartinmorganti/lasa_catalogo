// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Blanca IIº Nº1',
        price: 5961.90,
        image: '/BIIº/img/BII_1.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 14cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
        
    {
        name: 'Blanca IIº Nº1L',
        price: 6465.82,
        image: '/BIIº/img/BII_1L.jpg',
        ancho: 'Ancho: 7cm',
        largo: 'Largo: 16cm',
        fuelle: 'Fuelle: 4cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº2',
        price: 6923.91,
        image: '/BIIº/img/BII_2.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 16,5cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº2L',
        price: 7264.23,
        image: '/BIIº/img/BII_2L.jpg',
        ancho: 'Ancho: 9cm',
        largo: 'Largo: 21cm',
        fuelle: 'Fuelle: 4,5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº3',
        price: 7525.99,
        image: '/BIIº/img/BII_3.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 23cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº3L',
        price: 7781.22,
        image: '/BIIº/img/BII_3L.jpg',
        ancho: 'Ancho: 11cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 5cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº4',
        price: 8658.16,
        image: '/BIIº/img/BII_4.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 27cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº4A',
        price: 8461.83,
        image: '/BIIº/img/BII_4A.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 22,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº5',
        price: 10065.21,
        image: '/BIIº/img/BII_5.jpg',
        ancho: 'Ancho: 12,5cm',
        largo: 'Largo: 30,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca Extra Nº6',
        price: 11158.12,
        image: '/BIIº/img/BII_6.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 29,5cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº6L',
        price: 12610.95,
        image: '/BIIº/img/BII_6L.jpg',
        ancho: 'Ancho: 15cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 6cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº7',
        price: 15294.14,
        image: '/BIIº/img/BII_7.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 34cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº7L',
        price: 17172.38,
        image: '/BIIº/img/BII_7L.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 38cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº8',
        price: 18782.27,
        image: '/BIIº/img/BII_8.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 42cm',
        fuelle: 'Fuelle: 7cm',
        unidad: 'Unidad: Millar'
    },
    {
        name: 'Blanca IIº Nº9',
        price: 21197.14,
        image: '/BIIº/img/BII_9.jpg',
        ancho: 'Ancho:18cm',
        largo: 'Largo: 48cm',
        fuelle: 'Fuelle: 7cm',
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
