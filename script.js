async function getTemp(){
  
    let cityName = document.getElementById("cityName").value;
    let fetched = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4f116c5cdcde209f70a585124b5a134f&units=metric 
`)
    let data = await fetched.json();
    console.log(data); // just for checking in console
    try
    {
    document.getElementById("temprature").innerText = (data.main.temp) + "C"; // Kelvin to Celsius
    }
    catch(err)
    {
        document.getElementById("temprature").innerText = data.message; 
    }
}

    