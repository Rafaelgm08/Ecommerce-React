const products = [
    { id: "1", name: "Monitor Samsung Ips de 24", description: "Monitor Samsung IPS de 24' Full HD Freesync 75Hz", category: "Samsung", precio: "$375.000", stock: 4, img: "https://i.linio.com/p/facf9f60fcb2fd98e64fc5f68aadf849-product.webp"},
    { id: "2", name: "Monitor FHD Samsung de 27", description: "Monitor FHD de 27' IPS frecuencia de actualización de 240 Hz", category: "Samsung", precio: "$1.799.900", stock: 8, img: "https://i.linio.com/p/bb419874f493e424e6d5b8eab196463a-product.jpg"},
    { id: "3", name: "Monitor Samsung 22 Full Hd", description: "Monitor Samsung 19 Pulgadas HD 60Hz 5ms LS19A330 – HDMI", category: "Samsung", precio: "$693.900", stock: 10, img: "https://i.linio.com/p/a7e576cd8bd638f2499506789523fd22-product.webp" },
    { id: "4", name: "Monitor HP 24 Pulgadas", description: "Monitor HP 24 Pulgadas Ultrafino IPS Full HD 75Hz M24fw", category: "HP", precio: "$1.200.000", stock: 10, img: "https://i.linio.com/p/6fe38abb1e8bfd959fbd68ae5690b6c3-product.jpg" },
    { id: "5", name: "Samsung Monitor 32 curvo", description: "Samsung Monitor 32 curvo FHD 1800R con diseño sin bordes", category: "Samsung", precio: "$979.9000", stock: 10, img: "https://i.linio.com/p/f0b8b752b0fd12841dbe5b636d80f88d-product.webp" },
    { id: "6", name: "Monitor Samsung Curvo 28”", description: "Monitor Samsung 28 Ips Uhd 4k Hdr Freesync Lu28r550 - Negro", category: "Samsung", precio: "$1.429.900", stock: 10, img: "https://i.linio.com/p/87fde2cbda78be6003e1f71cc3d8c0b2-product.webp" },
    { id: "7", name: "Monitor Samsung 24 pulgadas", description: "Monitor Samsung 24 pulgadas IPS Full HD 75Hz HDMI F24T35", category: "Samsung", precio: 500.000, stock: 10, img: "https://i.linio.com/p/9208044f3529cef54dcc9da847998cf5-product.jpg" },
    { id: "8", name: "Monitor Ultrawide Lg", description: "Monitor Ultrawide Lg 34 Ips Hrd10 Freesync 75Hz 34wp500-B", category: "Lg", precio: 500.000, stock: 10, img: "https://i.linio.com/p/5c3d798c6f55becbb29124c76968a19d-product.jpg" },
    { id: "9", name: "Monitor LG Ips", description: "Monitor LG Ips De 27 Uhd 4k Freesync 60Hz 27UL500-W  Blanco", category: "Lg", precio: 500.000, stock: 10, img: "https://i.linio.com/p/08c6c03ea191c35d60fe20ff881bfa43-product.jpg" },
    { id: "10", name: "Monitor AOC 22B2HN", description: "Monitor AOC 22B2HN 21.5 7ms 75hz Full Hd Vga Hdmi Negro", category: "Aoc", precio: 437.900, stock: 10, img: "https://i.linio.com/p/d473d62b5ed860a61c7443eafbc92747-product.webp" },
    { id: "11", name: "Monitor 27 Gamer AOC", description: "Monitor 27 Gamer AOC FHD 144Hz Black", category: "Aoc", precio: "$904.900",  stock: 10, img: "https://i.linio.com/p/21c70ab7b6e67df095ab1373edc6b86c-product.webp" },
    { id: "12", name: "Monitor Gamer AOC AGON", description: "Monitor Gamer AOC AGON G2490VX LCD 238 negro y rojo 100V240V", category: "Aoc", precio: "$904.900", stock: 10, img: "https://i.linio.com/p/712cf8cafba3ce781535ce9c3661b992-product.webp" },
    { id: "13", name: "Monitor LG 24", description: "Monitor LG 24 24mp400 Fhd 75hz", category: "Lg", precio: "$769.900", stock: 10, img: "https://i.linio.com/p/b1fbf18c9bc2367a58d48741df6a12a7-product.webp" },
    { id: "14", name: "Monitor LG 32 Full Hd", description: "Monitor LG 32 Full HD IPS 32MN600P-B 5ms GTG 75Hz", category: "Lg", precio: "$785.000", stock: 10, img: "https://i.linio.com/p/8bddb9a3d2e59edc722fa5d86c2c1a62-product.webp" },
    { id: "15", name: "Monitor HP 24 Pulgadas", description: "Monitor HP 24 Pulgadas Ultrafino IPS Full HD 75Hz M24fw", category: "HP", precio: "$1.199.900", stock: 10, img: "https://i.linio.com/p/eda59361f280b1339545e0fd5eeef6da-product.webp" },
];


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);


        } else {
            reject("No hay productos")
        }
    })
}
//esta funcion va a ir al detalle con el id , va a chequear con el id
export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            const product = products.find( p => p.id == id );
            setTimeout(() => {
                if(!product) {
                    reject(`No se encuentra el producto con el id ${id}`)
                } else {
                    resolve(product);
                }
            }, 2000);
        } else {
            reject("No hay productos")
        }
    })
}