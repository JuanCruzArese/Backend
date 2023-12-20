import express from "express";
import productosRoutes from "./routes/productos.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";
import CartManager from "./CartManager.js";


const PORT = 8080;
const app = express();

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`);
} )


app.use("/api/products", productosRoutes)

app.use("/api/carts", carritoRoutes)


 


