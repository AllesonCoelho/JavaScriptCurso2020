let departureDateEntry = prompt('Digite a data de saida (formado DD/MM/YYYY)')

let departureDate = moment(departureDateEntry, 'DD/MM/YYYY')

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt('Escolha uma opcao de conversao de data \n1- Segundos \n2- Minutos \n3- Horas \n4- Dias')


if(chosenOption == 1)
{
    let secondsDepartureDate = Math.round(dateDiff/1000)
    alert('Tempo de voo ' + secondsDepartureDate)
}
else if(chosenOption == 2)
{
    let minutesDepartureDate = Math.round(dateDiff/1000/60)
    alert('Tempo de voo ' + minutesDepartureDate)
}
else if(chosenOption == 3)
{
    let horasDepartureDate = Math.round(dateDiff/1000/3600)
    alert('Tempo de voo ' + horasDepartureDate)
}
else if(chosenOption == 4)
{
    let daysDepartureDate = Math.round(dateDiff/1000/3600/24)
    alert('Tempo de voo ' + daysDepartureDate)
}
else
{
    alert('Opcao Invalida')
}