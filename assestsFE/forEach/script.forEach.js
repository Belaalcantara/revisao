//test de forEach

const companies = ["apple", "google", "facebook"];

companies.forEach(company => {
    console.log(`hey, ${company}`)
});

const names = ["whimds", "freeway", "test", "maria"];
names.forEach((name) => {
    console.log(`hi, ${name}!`)
});

//exercicio 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(` o numero ${number} esta no ${index} ` );
    }
}
)

//exercicio de carros que mostra pegando todos os arrays

const cars = [
  {
    marca: "ford",
    modelo: "focus",
  },

  {
    marca: "bmw",
    modelo: "bmw 24" ,
  },

  {
    marca: "fiat ",
    modelo: "palio",
  },
  {
    marca: "audi" ,
    modelo:"A3" ,
  },

]



cars.forEach((car) => {
    console.log(`marca: ${car.marca}
     modelo: ${car.modelo}`)
})
//exercicio


class Carros {
    constructor(modelo, marca){
    this.modelo = modelo;
    this.marca =marca;
}

}
class ListCar{
    constructor(){
        this.carros= [] 
    }
    listCar(carro){
        this.carros.push(carro)
    }
    
}

const listCar= new ListCar()

function recebe() {
  let marca = document.getElementById("inputMarca").value 
  let modelo = document.getElementById("inputModelo").value 

 const carros = new Carros(marca, modelo);
 listCar.listCar(carros)

  listCar.carros.forEach(car =>{
    console.log( ` marca ${car.modelo} e modelo ${car.marca}`)
  })


}