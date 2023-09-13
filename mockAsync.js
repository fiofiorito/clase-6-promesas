const productos = [
    { id: 1, name: "Producto A", price: 10.99, stock: 50 },
    { id: 2, name: "Producto B", price: 19.99, stock: 30 },
    { id: 3, name: "Producto C", price: 5.99, stock: 100 },
    { id: 4, name: "Producto D", price: 25.99, stock: 20 },
    { id: 5, name: "Producto E", price: 14.49, stock: 60 },
    { id: 6, name: "Producto F", price: 8.99, stock: 75 }
];

const getProducts = () => new Promise((resolve, reject) => {
    let status = 200;
    setTimeout(() => {
        if (status === 200) {
            resolve(productos);
        } else {
            reject("no no no, error");
        }
    }, 3000);
});

getProducts().then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
})

