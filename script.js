async function surabaya() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=surabaya&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`)
    var data = await response.json()
    console.log(data)
    document.getElementById('SUBT').innerHTML = data.main.temp
    document.getElementById('SUB').innerHTML = data.weather[0].main
}
surabaya()

async function yogyakarta() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=yogyakarta&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`)
    var data = await response.json()
    console.log(data)
    document.getElementById('YOGT').innerHTML = data.main.temp
    document.getElementById('YOG').innerHTML = data.weather[0].main
}
yogyakarta()

async function jakarta() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric`)
    var data = await response.json()
    console.log(data)
    document.getElementById('JKTT').innerHTML = data.main.temp
    document.getElementById('JKT').innerHTML = data.weather[0].main
}
jakarta()

