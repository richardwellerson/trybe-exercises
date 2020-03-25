const messageDelay = () => Math.floor(Math.random() * 5000)

const getMarsTemperature = () => {
  const maxTemperature = 58
  return Math.floor(Math.random() * maxTemperature)
}

const toFarenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32
const temperatureInFarenheit = (temperature) => console.log(`It is currently ${toFarenheit(temperature)}ºF at Mars`)
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`)

const sendMarsTemperature = (callback) => {
    setTimeout(() => {
        getMarsTemperature()
        return callback(getMarsTemperature())
    }, 4000);
    
}

sendMarsTemperature(temperatureInFarenheit) // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet) // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
