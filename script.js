function validationValues() {
    const inputMin = document.querySelector("#input-min")
    const inputMax = document.querySelector("#input-max")
    const resultElement = document.querySelector("#result")
    const cardElement = document.querySelector("#card")
    const valueMin = Number(inputMin.value)
    const valueMax = Number(inputMax.value)

    resultElement.classList.remove("error")

    if (inputMin.value === "" || inputMax.value === "") {
        showError("Preencha os dois campos")
        return
    }

    if (isNaN(valueMin) || isNaN(valueMax)) {
        showError("Digite apenas números")
        return
    }

    if (valueMin > valueMax) {
        showError("O menor valor deve ser inferior ao maior valor")
        return
    }

    generateNumber(valueMin, valueMax)

    cardElement.classList.remove("reveal")
    void cardElement.offsetWidth
    cardElement.classList.add("reveal")
}

function showError(message) {
    const resultElement = document.querySelector("#result")
    resultElement.classList.add("error")
    resultElement.textContent = message
}

function generateNumber(valueMin, valueMax) {
    const minimum = Math.ceil(valueMin)
    const maximum = Math.floor(valueMax)
    const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum

    document.querySelector("#result").textContent = result
}
