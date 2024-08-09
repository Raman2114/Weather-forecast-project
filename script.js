var inputvalue=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var descrip=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik='612df7218030f2eb8d58a3c0a65342f8';

function conversion(val){
    return (val-273).toFixed(3);
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=> res.json())
    .then(data => {
        var nameval=data['name']
        var description =data['weather']['0']['description']
        var temperature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        city.innerHTML=`weather of <span>${nameval}</span>`;
        temp.innerHTML=`Temperature : <span>${ conversion(temperature)} C </span>`;
        descrip.innerHTML=`Sky condition : <span>${description}</span>`;
        wind.innerHTML=`Wind Speed : <span>${wndspeed} m/s</span>`
    })

    .catch(err=> alert('You have entered wrong city'))
})