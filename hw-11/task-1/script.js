fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(data => {
        console.log(data.carts);
        let carts = data.carts
        for (const cart of carts) {
            document.write('<div>')
            document.write(`
        <h2>Cart - ${cart.id}</h2>
        <p>${cart.discountedTotal}</p>
        `)
            let products = cart.products
            document.write('<ul>')
            for (const product of products) {
                document.write(`
                    <li>${product.title} - ${product.price} UAH</li>
                `)
            }
            document.write('</ul>')


            document.write(`
            <p>${cart.total}</p>
            <p>${cart.totalProducts}</p>
            <p>${cart.totalQuantity}</p>
            <p>${cart.userId}</p>
            <h1> </h1>
            <hr>
`)
            document.write('</div>')
        }
    });
