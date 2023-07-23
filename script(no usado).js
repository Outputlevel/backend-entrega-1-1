

console.log("Saludos desde la consola!")

let products = []
const id = 1

class Product {
    constructor (title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        //this.#producto = `${title} ${description} ${price}`
    }   
}

class ProductManager {
    constructor(){
        
      }
    
    addProduct(title, description, price, thumbnail, code, stock) {
    let product = new Product(title, description, price, thumbnail, code, stock, id)
    //let entries = Object.values(this.products)
    temp = [...productos]

    this.products.map(p =>{
        
        if(product.title == p.title) {
            console.log("nooooo")
        } else {
            

        }
    })
        this.products.push(product)
        console.log(`Producto agregado >>>`)
        return product

    }






    get getProducts() {
        return this.products
    }

    getProductById(title) {
        let product = new Product(title)
        this.products.filter(p =>{
            if(p.title == product.title) {
                return p
            } 
        })

    }
}