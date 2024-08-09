const upperkye = "MNBVCXZASDFGHJKLPOIUYTREWQ"
const lowerkye = "qwertyuioplkjhgfdsazxcvbnm"
const numberkye = "1234567890"
const symbolkye = "~!@#$%^&*()-+?/><][{}"


const passbox = document.getElementById("pass-box")
const Totalchar = document.getElementById("total-char")
const LowercaseeInput = document.getElementById("lower-case")
const UppercaseeInput = document.getElementById("upper-case")
const numbersInput = document.getElementById("numbers")
const symbolsInput = document.getElementById("symbols")

const getRandomData = (data) => {
    return data[Math.floor(Math.random() * data.length)]
}

const genratePassword = (Password = "") => {

    if (UppercaseeInput.checked) {
        Password += getRandomData(upperkye)
    }
    if (LowercaseeInput.checked) {
        Password += getRandomData(lowerkye)
    }
    if (numbersInput.checked) {
        Password += getRandomData(numberkye)
    }
    if (symbolsInput.checked) {
        Password += getRandomData(symbolkye)
    }
    if (Password.length < Totalchar.value) {
        return genratePassword(Password)
    }

    passbox.innerText = Password;
}

document.getElementById("btn").addEventListener("click",
    function () {
        genratePassword();
    }
)