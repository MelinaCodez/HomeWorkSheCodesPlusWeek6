let now = new Date();

let currentdate = document.querySelector("h2");

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
minutes = now.getMinutes();
date = now.getDate();
day = days[now.getDay()];
hours = now.getHours();

if (minutes < 10) {
    currentdate.innerHTML = `${day} ${date}  ${hours}: 0${minutes}`;
} else {
    currentdate.innerHTML = `${day} ${date}  ${hours}:${minutes}`;
}


function signUp(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-text-input");
    let city = searchinput.value;
    let key = "7432bc33052157d23671be783f19aba7";
    let Apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
     
    axios.get(Apiurl).then(
      (response) => {
          var result = response.data;
          console.log(result); 
          console.log(result.main.temp); 
          let newcity = document.getElementById("#country+temp");
          let weather1=document.getElementById("#state");
          console.log(result.weather[0].main);
          weather1.innerHTML=`${result.weather[0].main}`;
          newcity.innerHTML = `${city} ${Math.round(result.main.temp)} °C`;
      });
  
    console.log(searchinput.value);
    
    // return searchinput.value;
     

}
let form = document.querySelector("#searchform");
form.addEventListener("submit",signUp );
