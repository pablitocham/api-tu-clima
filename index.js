const key = "77a262b55190f1ba6859c3b19ab91f61";
let grado = 273.15

llamandoClima = async (ciudad) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`;
    let resul = await fetch(URL)
    let data = await resul.json()
    const ciudadNombre = data.name
    const temperatura = data.main.temp - 273.15
    const description = data.weather[0].description
    const humedad = data.main.humidity
    const viento = data.wind.speed
    const presion = data.main.pressure
    const visibilidad = data.visibility

    const amanecer = new Date(data.sys.sunrise * 1000).toLocaleTimeString()
    const atardecer = new Date(data.sys.sunset * 1000).toLocaleTimeString()

    document.getElementById("datos").innerHTML =
        `
    <p>Ciudad: ${ciudadNombre}</p>
    <p>Temperatura: ${temperatura.toFixed(1)} °C</p>
    <p>Descripción: ${description}</p>
    <p>Humedad: ${humedad}%</p>
    <p>Viento: ${viento} m/s</p>
    <p>Presión: ${presion} hPa</p>
    <p>Visibilidad: ${visibilidad / 1000} km</p>
    <p>Amanecer: ${amanecer}</p>
    <p>Atardecer: ${atardecer}</p>
    `
}
const busqueda = () => {
    const ciudad = document.getElementById(`ciudadEntrada`).value 
    llamandoClima(ciudad)
}
document.getElementById(`busqueda`).addEventListener(`click`, busqueda)
document.getElementById(`ciudadEntrada`).addEventListener(`keydown`, (event) => {
    if (event.key === "Enter") {
        busqueda()
    }
})




