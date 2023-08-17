// function calculateIMC(){
//     const weight = document.getElementById("weight").value;
//     const height = document.getElementById("height").value;

//     const bmi = (weight / (height * height)).toFixed(2);

//     if(!isNaN(bmi)){
//         const value = document.getElementById("value");
//         let description = "";

//         value.classList.add("attention");

//         document.getElementById("infos").classList.remove("hidden");

//         if (bmi < 18.5){
//             description = "você está abaixo do peso!";
//         }else if (bmi >= 18.5 && bmi < 25){
//             description = "você está no peso ideal!";
//             value.classList.remove("attention");
//             value.classList.add("normal");
//         }else if (bmi >= 25 && bmi < 30){
//             description = "você está acima do peso";
//         }else{
//             description = "você está fofinho!";
//         }
//         document.getElementById("description").textContent = description;
//         document.getElementById("value").innerHTML = bmi;
//     }
//     }


let personSimple = "bebela alcantara";

const personObject = {
    firstName : "bebela",
    lastName : "alcantara",
    eyeColor : "blue"
};

console.log(personSimple);
console.log (`Meu primeiro nome é ${personObject.firstName} aaaa ${personObject.lastName} `) ;

