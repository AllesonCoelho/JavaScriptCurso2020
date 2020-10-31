function showInfo(){
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='devekoper-options']:checked")
    let optionsValue = []

    developerOptions.forEach(element => {optionsValue.push(element.value)})
    let optionsChecked = optionsValue.join(", ")
    alert("Nome: " + name + " \ncor favorita " + favoriteColor + " \nGosta de programar?" + likeProgramming +
    "\nConhecimento em programacao web" + developerOptions + optionsChecked)
}