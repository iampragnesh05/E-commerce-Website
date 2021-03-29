const productsDOM = document.getElementById('products');

//getting the product 
class Products {
  async getProducts(){
    try{
      let result = await fetch('product.json');
      let data = await result.json();
     let products = data.items;
      products = products.map(item => {
        const {name,price} = item;
        // const {id} = item.id;
        const size = item.size;
        const image = item.image;
        const description = item.description;
        return {name,price,image,size, description}
      })
      return products
    } catch (error){
      console.log(error)
    }
 
  }
}

// Display Product
class UI {
displayProducts(products){
 let result = '';
 products.forEach(product => {
   result += `
   <div class=" col-g-4 col-md-6 ol-sm-10 offset-md-0 offset-sm-1 mt-5">
   <div class="card">
     <img src="${product.image}" class="card-img-top" alt="product">
   </div>
   <div class="card-body">
     <h6 class="font-weight-bold pt-1">${product.name}</h6>
     <div class="text-muted description">${product.description}</div>
     <div class="d-flex align-items-center product pt-2"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> </div>
   </div>
   <div class="d-flex align-items-center justify-content-between pt-3">
     <div class="d-flex flex-column">
       <div class="h6 font-weight-bold">${product.price} USD</div>
       <div class="text-muted rebate">Size ${product.size}</div>
     </div>
   </div>
   <div class="btn btn-primary mt-2">Buy now</div>
 </div>
   `
 });
 productsDOM.innerHTML = result;
}
}

// local Storage
class Storage{}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  // get all products 
  products.getProducts().then(products => ui.displayProducts(products));
})