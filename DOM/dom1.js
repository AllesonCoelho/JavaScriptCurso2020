function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")//form com a id phones <form id="phones">
    const newPhone = phoneForm.children[0].cloneNode(true)//ele clona o <p> e todas as suas filhas o true da o sim pra isso
    const phonePostion = phoneForm.children.length + 1 //adiciona mais uma lista
    newPhone.querySelector("label").innerText = "Telefone " + phonePostion + ": "//adiciona uma novo texto na querry ccriada
    phoneForm.appendChild(newPhone)//ta clonando o novo elemento e adicionando dentro do form
    console.log(phoneForm)

}


function printPhones(){
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")//ele vai pegar todos os inputs com name=phone ja que dentro do o input o nome nao sera alterado
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
        
    })
    alert(message)
}