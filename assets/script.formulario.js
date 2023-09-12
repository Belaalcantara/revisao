
function toSend(){

const allInfos = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    eyeColor: document.getElementById("eyeColor").value
}
document.getElementById("text").innerHTML = `Olá ${allInfos.firstName}, seu sobrenome é ${allInfos.lastName}, você tem ${allInfos.age} anos e a cor dos seus olhos é ${allInfos.eyeColor}`

}