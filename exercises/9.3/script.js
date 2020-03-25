const h2Tag = (tagWrite) => document.getElementById(tagWrite)
const fetchJoke = () => {
    const API_URL = "https://icanhazdadjoke.com/"
    fetch(API_URL, {
            headers: { Accept: "application/json" }
        })
        .then((response) => response.json())
        .then((json) => h2Tag('joke-container').innerHTML = json.joke)
}

fetchJoke()
