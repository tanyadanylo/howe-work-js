const container = document.getElementById("container");

fetch("https://dummyjson.com/carts")
    .then(res => res.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        for (const cart of carts) {
            let divCart = document.createElement('div');
            divCart.innerText = `
            ID: ${cart.id}
            Total: ${cart.total}
            Discounted total: ${cart.discountedTotal}
            User ID: ${cart.userId}
            Total products: ${cart.totalProducts}
            Total quantity: ${cart.totalQuantity}
            `
            const productsUl = document.createElement('ul');
            for (const product of cart.products) {
                let productsLi = document.createElement('li');
                productsLi.innerText = `
                ID: ${product.id}
                Title: ${product.title}
                Price: ${product.price}
                quantity: ${product.quantity}   
                total: ${product.total}
                discountPercentage: ${product.discountPercentage}
                discountedTotal: ${product.discountPercentage}
                thumbnail: 
                `
                productsUl.appendChild(productsLi);
                container.append(divCart, productsUl);

                const productPhoto = document.createElement('img');
                productPhoto.src = `${product.thumbnail}`
                productsLi.appendChild(productPhoto);
            }
        }
    })

