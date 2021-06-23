document.addEventListener("DOMContentLoaded", () => {
    startHpCounter();
    getFetchCalls();
    resetBtn.addEventListener('click', resetHpNumber)
    pauseBtn.addEventListener('click', pauseHpNumber)
    homeBtn.addEventListener('click', handleHomeBtn)
    // exampleConversions.addEventListener('click', handleExampleConversions)
    userCreatedConversions.addEventListener('click', User.handleUserFormShow)
    usernameSubmit().addEventListener('submit', UserApi.submitUsername)
    sources.addEventListener('click', Measurement.handleSourceList)
})
//Fetch Calls
const getFetchCalls = () => {
    MeasurementApi.fetchMeasurements()
    ConversionApi.fetchConversions()
}
//Main-Section Functionality
const handleHomeBtn = () => {
    mainDisplay.innerHTML = `<h1>Calculate the strength of Various Animals</h1>
    <p>Have you ever wondered how many squirrels it would take to power your car, or how many ducks it would take to launch a space shuttle?? Now there is an app for that.
    You will have the ability to calculate these numbers. Just create a username and add type in the hp value to calculate the value you are looking for.</p>`
}

//Side-Bar Functionality
const isIncrementing = () => {
    return (pauseBtn.innerText === "Pause") ? true : false
}
const startHpCounter = () => {
    setInterval(addOneHp, 1500)
    setInterval(multiplyAnimalHpEquivalent,1500)
}
const addOneHp = () => {
    if (isIncrementing()) {
        hpCount.innerText = parseInt(hpCount.innerText) + 1
    } 
}
const resetHpNumber = (e) => {
    hpCount.innerText = "0"
}
const pauseHpNumber = (e) => {
    pauseBtn.innerText = (pauseBtn.innerText === "Pause") ? "Resume" : "Pause"
}

const multiplyAnimalHpEquivalent = () => {
    for (i = 0; i < animalRatioArray.length; i++) {
    hpEquivalentArray[i].innerText = (parseInt(hpCount.innerText) * parseFloat(animalRatioArray[i].innerText)).toFixed(2)
    }
}

