function travelling(input) {
    let destinationOrEnd = input[0] // играе роля на дестинацията и на команда
    let budget = Number(input[1]) // бюджет
    let savings = 0 // спестявания
    let index = 1 // начало на индексиране
    while (destinationOrEnd !== 'End') {
    index++
    while (savings < budget) {
    savings += Number(input[index])
    index++
    }
    console.log(`Going to ${destinationOrEnd}!`)
    destinationOrEnd = input[index++]
    budget = Number(input[index])
    savings = 0  
    }
    }
    travelling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
    