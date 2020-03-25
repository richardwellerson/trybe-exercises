const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers"
  }
}

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers"
  }
}

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers"
  }
}

console.log(planetDistanceFromSun(mars)) // Mars is 227900000 kilometers apart from the Sun = 1st
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000) // Jupiter is 778500000 kilometers apart from the Sun = 3rd
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000) // Venus is 108200000 kilometers apart from the Sun = 2nd
