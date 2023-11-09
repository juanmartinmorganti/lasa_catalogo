// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Bandeja Reforzada Rectangular Nº1',
        price: 13612.46,
        image: 'BR/img/BR_REC_1.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 13cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº2',
        price: 15535.27,
        image: 'BR/img/BR_REC_2.jpg',
        ancho: 'Ancho: 22cm',
        largo: 'Largo: 15cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº3',
        price: 18712.52,
        image: 'BR/img/BR_REC_3.jpg',
        ancho: 'Ancho: 23cm',
        largo: 'Largo: 16cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº4',
        price: 27887.41,
        image: 'BR/img/BR_REC_4.jpg',
        ancho: 'Ancho: 26cm',
        largo: 'Largo: 18cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº5',
        price: 35402.12,
        image: 'BR/img/BR_REC_5.jpg',
        ancho: 'Ancho: 29cm',
        largo: 'Largo: 21cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº6',
        price: 51465.97,
        image: 'BR/img/BR_REC_6.jpg',
        ancho: 'Ancho: 310cm',
        largo: 'Largo: 230cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Rectangular Nº7',
        price: 56538.50,
        image: 'BR/img/BR_REC_7.jpg',
        ancho: 'Ancho: 34cm',
        largo: 'Largo: 24cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Rectangular Rectangular Nº8',
        price: 71802.09,
        image: 'BR/img/BR_REC_8.jpg',
        ancho: 'Ancho: 37cm',
        largo: 'Largo: 25cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzadas Redondas Nº13.5',
        price: 27474.88,
        image: 'BR/img/BR_RED_135.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro 24',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Redonda Nº14',
        price: 33574.79,
        image: 'BR/img/BR_RED_14.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 27',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Redonda Nº15',
        price: 42993.70,
        image: 'BR/img/BR_RED_15.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 29',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Redonda Nº16',
        price: 51021.06,
        image: 'BR/img/BR_RED_16.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 33',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Reforzada Redonda Nº18',
        price: 80324.20,
        image: 'BR/img/BR_RED_18.jpg',
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
