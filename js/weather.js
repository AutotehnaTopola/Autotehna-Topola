fetch('http://api.openweathermap.org/data/2.5/weather?id=785013&appid=3bd80327159effd5bb789a9bdbdc891b')
.then(function(resp) {return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector(".cityName").innerHTML=data.name;
    document.querySelector(".tempCity").innerHTML=parseInt(data.main.temp - 273) + '&deg;C';
    document.querySelector(".imgWeather").innerHTML=`<li style="background-image:url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png); background-size:cover; background-position:center;height:70px;width:80px;"></li>`
})

