class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      const id =
        this.products.length === 0
          ? 1
          : this.products[this.products.length - 1].id + 1;
  
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log("Error: Every fild in required");
        return;
      }
      if (this.products.some((p) => p.code === product.code)) {
        console.log("Error: The product code already exists");
        return;
      }
  
      const newProduct = {
        id,
        ...product
      };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((prod) => prod.id === id);
      //product ? product : console.log("Error: Product not found");}
       if (product) {
        return product;
      } else {
        console.log("Error: Product not found");
      }
    }
  }
  
  const productoNuevo1 = new ProductManager();
  console.log(productoNuevo1)
  //Muestro el array vacio.
  
  productoNuevo1.addProduct({ title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25});
  productoNuevo1.addProduct({ title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25});
  //Cargo con el mismo codigo para comprobar mensaje de error.
  productoNuevo1.addProduct({ description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25});
  //Cargo sin un elemento para comprobar mensaje de error.
  
  productoNuevo1.addProduct({ title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc321', stock: 25});
  productoNuevo1.addProduct({ title: 'producto prueba', description: 'Elemento para traer con getProductById', price: 200, thumbnail: 'Sin imagen', code: 'abc000', stock: 25});
  console.log(productoNuevo1.getProducts());
  //Cargo un nuevo producto y traigo todos.
  
  console.log(productoNuevo1.getProductById(4));
  //Llamo un id inexistente para comprobar mensaje de error.
  
  console.log(productoNuevo1.getProductById(3));
  //Traigo un elemento con getProductByID.