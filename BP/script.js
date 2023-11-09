// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Bandeja Pesada Rectangular Nº1',
        price: 17533.09,
        image: '/BP/img/BP_REC_1.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 13cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº2',
        price: 21814.42,
        image: '/BP/img/BP_REC_2.jpg',
        ancho: 'Ancho: 22cm',
        largo: 'Largo: 15cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº3',
        price: 29212.02,
        image: '/BP/img/BP_REC_3.jpg',
        ancho: 'Ancho: 23cm',
        largo: 'Largo: 16cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº4',
        price: 42065.88,
        image: '/BP/img/BP_REC_4.jpg',
        ancho: 'Ancho: 26cm',
        largo: 'Largo: 18cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº5',
        price: 53747.45,
        image: '/BP/img/Bp_REC_5.jpg',
        ancho: 'Ancho: 29cm',
        largo: 'Largo: 21cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº6',
        price: 72446.36,
        image: '/BP/img/BP_REC_6.jpg',
        ancho: 'Ancho: 310cm',
        largo: 'Largo: 230cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº7',
        price: 75720.65,
        image: '/BP/img/BP_REC_7.jpg',
        ancho: 'Ancho: 34cm',
        largo: 'Largo: 24cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº8',
        price: 94448.54,
        image: '/BP/img/BP_REC_8.jpg',
        ancho: 'Ancho: 37cm',
        largo: 'Largo: 25cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº8½',
        price: 107688.43,
        image: '/BP/img/BP_REC_8 ½.jpg',
        ancho: 'Ancho: 29cm',
        largo: 'Largo: 39cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Rectangular Nº9',
        price: 147779.29,
        image: '/BP/img/BP_REC_9.jpg',
        ancho: 'Ancho: 44cm',
        largo: 'Largo: 30cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Pesada Redonda Nº18',
        price: 92037.75,
        image: '/BP/img/BP_RED_9 .jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 35',
        unidad: 'Unidad x Bulto: 100'
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
