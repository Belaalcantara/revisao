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
    this.nextCateroruId= 1;
  }

    addCategory(name){
        const id = this.nextCategoryId++
        const category = new category (id, name);
        this.categories.push(category);
    }
}