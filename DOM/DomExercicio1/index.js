function addHouse(){
    let number = document.querySelector("input[name='number'").value
    let neighborhood = document.querySelector("input[name='neighborhood'").value
    let area = document.querySelector("input[name='area'").value
    let city = document.querySelector("input[name='city'").value


    let newListValue = document.createElement("li")
    newListValue.innerText = area + "m², numero" + number + " (" + neighborhood + " - " + city + " )"

    let removeButton = document.createElement("button")//tag
    removeButton.type = "button"//o tipo da tag, que eh button
    removeButton.innerText = "Remover"//isso aqui eh a string que vai no botao
    removeButton.setAttribute("onclick", "removeHouse(this)")//esse atribute eh o que vai no campo


    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)

}

function removeHouse(button){
    let liToRemove = button.parentNode //pai do button eh o li
    document.getElementById("house-list").removeChild(liToRemove)

}