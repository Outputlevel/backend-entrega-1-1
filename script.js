/* 
----------------Comandos Recomendados---------------
Agregar Productos:
data.addProduct("Mazda", "auto de lujo", "24000", "imagen", "code1", "0145")
data.addProduct("Ford", "auto no de lujo", "14000", "imagen", "code2", "0146")

Ver Todos Los Productos:
data.getProducts()

Ver Productos por id:
data.getProductById(1)
------------------------------------------------------------
*/
console.log("Saludos desde la consola")

const id = 0
let products = []
let productsFiltered = []

class Product {
    constructor (title, description, price, thumbnail, code, stock, id) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = products.length + 1
    }   


    addProduct(title, description, price, thumbnail, code, stock) {
        let product = new Product(title, description, price, thumbnail, code, stock, id)
        let temp = [...products]
        if(products.length){
            let idFinder = products.find( e => e.code == product.code )
            if(idFinder){
                console.log("Codigo ya existente, intente de nuevo")
            } else {
                console.log("Imprimiendo array nuevo")
                temp.push(product)
            }
           
           
            /* products.map(p =>{
                if(p.code == product.code) {
                    console.log("Codigo ya existente")
                    return
                    
                } else{
                    console.log("Producto nuevo")
                    return temp
                    //temp.push(product)        
                }
            })*/
        
        
        }
        else{
            console.log("array vacio, creando datos")
            temp.push(product)
            
            
        }
        products = (temp.length) ?  temp : products
        return products
        //console.log("Producto nuevo")
        //let entries = Object.values(this.products)


        /*products.map(p =>{
            if(product.title == p.title) {
                console.log("nooooo")
            } 
        })*/
    }

    getProducts() {
        return products
    }

    getProductById(id) {
        productsFiltered = products.find(p => {
           return p.id === id
        })
        return productsFiltered
    }

}

data = new Product()


