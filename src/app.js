import express from "express";
import ProductManager from "./Productmanager.js";

const PORT = 8080;
const app = express();
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
} )

let Almacenamiento = new ProductManager("./info.JSON")


app.get(`/products`, async (req, res) =>{
    const { limit } = req.query;
    const productos = await Almacenamiento.getProducts();
    const productosLimitados = [];
    if(!limit){
        return res.send(productos)
    };
    for (let i = 0; i < parseInt(limit) ; i++) {
        productosLimitados.push(productos[i])
    };
    res.send(productosLimitados);
})

app.get("/products/:id", async (req, res) =>{
    const { id } = req.params;
    const productos = await Almacenamiento.getProducts();
    const producto = productos.find(p => p.id === parseInt(id));
    if(!id){
        return res.send(productos)
    }
    res.send(producto);
})