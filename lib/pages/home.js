//Importaciones
import { getAllProducts } from "../service/products.js"

//Instancias de elementos

const contenedor_pizzas = document.getElementById("contenedor-pizzas")
const contenedor_ensaladas = document.getElementById("contenedor-ensaladas")
const contenedor_hamburguesas = document.getElementById("contenedor-hamburguesas")
const contenedor_bebidas = document.getElementById("contenedor-bebidas")


const fillProducts = async()=>{
    const products = await getAllProducts()
    products.forEach(product => {

        
        //Crear elemento en la categoria
        productosRelacionadosContainer.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img
                style="min-height: 300px; max-height: 300px" 
                class="card-img-top"
                src="${product.image}" 
                alt="">
                <div class="card-boody p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">${product.title}</h5>
                    <span>${product.price}</span>
                  </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center d-flex gap-1">
                    <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">
                      Ver mas
                    </a>
                    <a href="" class="btn btn-outline-success mt-auto">
                      Añadir al Carrito
                    </a>
                  </div>
                </div>
              </div>

            </div>
            `
    });
}
fillProducts()