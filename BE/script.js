// Ejemplo de datos de productos (puedes reemplazar esto con tu propio conjunto de datos)
const products = [
    {
        name: 'Bandeja Economica Rectangular Nº0',
        price: 10470.95,
        image: 'BE/img/BE_REC_0.jpg',
        ancho: 'Ancho: 16cm',
        largo: 'Largo: 11cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº1',
        price: 11770.38,
        image: 'BE/img/BE_REC_1.jpg',
        ancho: 'Ancho: 18cm',
        largo: 'Largo: 13cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº2',
        price: 13399.83,
        image: 'BE/img/BE_REC_2.jpg',
        ancho: 'Ancho: 22cm',
        largo: 'Largo: 15cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº3',
        price: 15862.70,
        image: 'BE/img/BE_REC_3.jpg',
        ancho: 'Ancho: 23cm',
        largo: 'Largo: 16cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº4',
        price: 20496.72,
        image: 'BE/img/BE_REC_4.jpg',
        ancho: 'Ancho: 26cm',
        largo: 'Largo: 18cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº5',
        price: 25769.32,
        image: 'BE/img/BE_REC_5.jpg',
        ancho: 'Ancho: 29cm',
        largo: 'Largo: 21cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº6',
        price: 31740.99,
        image: 'BE/img/BE_REC_6.jpg',
        ancho: 'Ancho: 31cm',
        largo: 'Largo: 23cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº7',
        price: 35375.07,
        image: 'BE/img/BE_REC_7.jpg',
        ancho: 'Ancho: 34cm',
        largo: 'Largo: 24cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Rectangular Nº8',
        price: 47018.10,
        image: 'BE/img/BE_REC_8.jpg',
        ancho: 'Ancho: 37cm',
        largo: 'Largo: 25cm',
        diametro: '',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Redonda Nº12',
        price: 18836.54,
        image: 'BE/img/BE_RED_12.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 20',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Redonda Nº13½',
        price: 24180.30,
        image: 'BE/img/BE_RED_13.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 24',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Redonda Nº14',
        price: 28700.41,
        image: 'BE/img/BE_RED_14.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 27',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Redonda Nº15',
        price: 29279.79,
        image: 'BE/img/BE_RED_15.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 29',
        unidad: 'Unidad x Bulto: 100'
    },
    {
        name: 'Bandeja Economica Redonda Nº16',
        price: 35202.22,
        image: 'BE/img/BE_RED_16.jpg',
        ancho: '',
        largo: '',
        diametro: 'Diametro: 33',
        unidad: 'Unidad x Bulto: 100'
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
            <p>${product.diametro}</p>
            <p>${product.unidad}</p>
        `;

        container.appendChild(productDiv);
    });
}

// Llama a la función para renderizar los productos al cargar la página
renderProducts();
