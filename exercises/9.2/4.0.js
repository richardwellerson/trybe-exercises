const sendMarsTemperature = () => console.log(`Mars is ${getMarsTemperature()}º celsius today.`)

const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
    const maxTemperature = 58
    return Math.floor(Math.random() * maxTemperature)
}

sendMarsTemperature()
