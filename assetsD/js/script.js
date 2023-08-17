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

    }
}
 
const CategoryList = new CategoryService();

function creatCategory(){
    const categoryName = "doce";

    CategoryList.addCategory(categoryName);
    console.log(CategoryList.categories)
    
}