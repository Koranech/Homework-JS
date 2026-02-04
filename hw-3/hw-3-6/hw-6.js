let products = [

    {

        title: 'milk',

        price: 22,

        image: 'https://static.vecteezy.com/system/resources/thumbnails/035/176/109/small/spectral-sophistication-blank-milk-bottle-mockup-on-transparent-background-free-png.png'

    },

    {

        title: 'juice',

        price: 27,

        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'

    },

    {

        title: 'tomato',

        price: 47,

        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'

    },

    {

        title: 'tea',

        price: 15,

        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vN5pjMiGWWdEM108HPd8Wt5bw9aYafStLw&s'

    },

];

for (const product of products) {
        document.write(`<div class="product">
        <h3 class="product-title">${product.title} - ${product.price}</h3>
        <img src="${product.image}" alt="product-img">
</div> `);
}
