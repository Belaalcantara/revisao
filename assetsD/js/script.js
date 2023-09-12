class  Category {
    constructor(id, name){
        this.id = id;
        this.name= name;
        this.products = []
    
    }

}

class Products{
    constructor (id, name, price, category){
        this.id = id;
        this.name= name;
        this.price = price;
        this.category= category;
    }
}

class CategoryService{
  constructor(){
    this.categories=[]; 
    this.nextCategoryId= 1;
  }

    addCategory(name){
        const id = this.nextCategoryId++
        const category = new Category (id, name);
        this.categories.push(category);
    }
}

class ProductService{
    constructor (){
        this.products= []
      this.nextCategoryId= 0;

    }

    addProductor( name, price, category){
         const id= this.nextCategoryId++
         const product= new Products (id, name, price, category)
         category.products.push(product)
         this.products.push(product)

    }
}
 
const CategoryList = new CategoryService();
const productList = new ProductService(); 


function creatCategory(){
    const categoryName = document.getElementById("categoryName").value;
    CategoryList.addCategory(categoryName);
    console.log(CategoryList.categories)
    
}

function creatProduct(){
    const productName = "bolo"
    const producPrice = 20;
    const productCategory =CategoryList.categories[0]

    productList.addProductor(productName, producPrice, productCategory );
     cleanFields()
     console.log(productList.products)  
}






