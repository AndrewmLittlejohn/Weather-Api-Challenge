// var testApiCall = 'https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=39ff24e6b691ca65cee6319baa446835';
// var testCall2 = 'https://api.openweathermap.org/geo/1.0/direct?q=Richmond,Virginia&limit=5&appid=39ff24e6b691ca65cee6319baa446835';
// var currentWeatherCall = 'https://api.openweathermap.org/data/2.5/forecast?q=Richmond,VA,US&appid=39ff24e6b691ca65cee6319baa446835&units=imperial&per_page=5'; 

// var dailyWeather = 'https://api.openweathermap.org/data/2.5/forecast?q=Richmond,VA,US&cnt=5&appid=39ff24e6b691ca65cee6319baa446835&units=imperial&per_page=5';
 /* #regionmain Variables */
var submitBtn = document.querySelector('#submit');
var searchEntry = document.querySelector('#citysearch');
var searchListContainer = document.querySelector('#recent-container');
var list = document.querySelector('#recent-list');
var currentForecastContainer = document.querySelector('#currentcontainer');
// var fiveDayContainer= document.querySelector('#5daycontainer');
var savedDetails = localStorage.getItem ("City,ST")
var searchCount = document.querySelector('#searchcount');
var curCity = $('#cCcity');
var curData = $('.cdetes');
var curTemp = document.querySelector('#cCcTemp');
var now = document.querySelector('#conditions');
// var conditions = document.querySelector('#conditions');
var windS = document.querySelector('#windspeed');
var windG =document.querySelector('#windgust');

var city = document.createElement('span');
var currentTemp = document.createElement('span');
var con = document.createElement('span');
var speed = document.createElement('span');
var gust = document.createElement('span');

var day1desc = $('#day1description');
var day1temp = $('#day1temp');
var day1wind = $('#day1wind');
var day1humidity = $('#day1humidity');
var day1date = document.querySelector('#day1date');
// var oneDesc = document.createElement('span');
var oneTemp = document.createElement('span');
var oneWind = document.createElement('span');
var oneDate = document.createElement('span');
var oneHumidity = document.createElement('span');

day1date.innerHTML = dayjs().add(1,'day').format('MMM, D');

var day2desc = $('#day2description');
var day2temp = $('#day2temp');
var day2wind = $('#day2wind');
var day2humidity = $('#day2humidity');
var day2date = document.querySelector('#day2date');
// var twoDesc = document.createElement('span');
var twoTemp = document.createElement('span');
var twoWind = document.createElement('span');
var twoDate = document.createElement('span');
var twoHumidity = document.createElement('span');

day2date.innerHTML = dayjs().add(2,'day').format('MMM, D');

var day3desc = $('#day3description');
var day3temp = $('#day3temp');
var day3wind = $('#day3wind');
var day3humidity = $('#day3humidity');
var day3date = document.querySelector('#day3date');
// var threeDesc = document.createElement('span');
var threeTemp = document.createElement('span');
var threeWind = document.createElement('span');
var threeDate = document.createElement('span');
var threeHumidity = document.createElement('span');

day3date.innerHTML = dayjs().add(3,'day').format('MMM, D');

var day4desc = $('#day4description');
var day4temp = $('#day4temp');
var day4wind = $('#day4wind');
var day4humidity = $('#day4humidity');
var day4date = document.querySelector('#day4date');
// var fourDesc = document.createElement('span');
var fourTemp = document.createElement('span');
var fourWind = document.createElement('span');
var fourDate = document.createElement('span');
var fourHumidity = document.createElement('span');

day4date.innerHTML = dayjs().add(4,'day').format('MMM, D');

var day5desc = $('#day5description');
var day5temp = $('#day5temp');
var day5wind = $('#day5wind');
var day5humidity = $('#day5humidity');
var day5date = document.querySelector('#day5date');
// var fiveDesc = document.createElement('span');
var fiveTemp = document.createElement('span');
var fiveWind = document.createElement('span');
var fiveDate = document.createElement('span');
var fiveHumidity = document.createElement('span');

day5date.innerHTML = dayjs().add(5,'day').format('MMM, D');


var cS = document.createElement('i');
cS.classList.add('fa-regular');
cS.classList.add('fa-sun');
var fC = document.createElement('i');
fC.classList.add('fa-solid', 'fa-cloud-sun')
var sC = document.createElement('i');
sC.classList.add('fa-solid', 'fa-cloud');
var bC = document.createElement('i');
bC.classList.add('fa-solid', 'fa-cloud');
var sR = document.createElement('i');
sR.classList.add('fa-solid', 'fa-cloud-sun-rain');
var rN = document.createElement('i');
rN.classList.add('fa-solid', 'fa-cloud-showers-heavy');
var tS = document.createElement('i');
tS.classList.add('fa-solid', 'fa-cloud-bolt');
var snow = document.createElement('i');
snow.classList.add('fa-regular', 'fa-snowflake');
var mist = document.createElement('i');
mist.classList.add('fa-solid', 'fa-smog');


var searches = [];
var midDay = [];
var midDayHumidity = [];
var midDayWind = [];
var midDayDescription = [];
var searchHistory = [];

var currentCity = JSON.parse(localStorage.getItem('City,ST'));
/* #endregion */

function resetCurrent(){
city.remove();
currentTemp.remove();
con.remove();
speed.remove();
gust.remove();

midDay = [];
oneTemp.remove();
twoTemp.remove();
threeTemp.remove();
fourTemp.remove();
fiveTemp.remove();

midDayHumidity = [];
oneHumidity.remove();
twoHumidity.remove();
threeHumidity.remove();
fourHumidity.remove();
fiveHumidity.remove();

midDayWind = [];
oneWind.remove();
twoWind.remove();
threeWind.remove();
fourWind.remove();
fiveWind.remove();

midDayDescription = [];
// oneDesc.remove();
// twoDesc.remove();
// threeDesc.remove();
// fourDesc.remove();
// fiveDesc.remove();

cS.remove();
fC.remove();
sC.remove();
bC.remove();
sR.remove();
rN.remove();
tS.remove();
snow.remove();
mist.remove();

list.innerHTML = '';

}

/* #region main - Current Weather*/
  function getApiCurrent(searchInputCall) {
    // var searchInputCall = searchEntry.value.split(" ").join("").trim();
    var searchInputCall = searchEntry.value.trim();

    console.log(searchInputCall);
    var currentWeatherCall = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInputCall + ',US&appid=39ff24e6b691ca65cee6319baa446835&units=imperial&per_page=5'; 
    
    fetch(currentWeatherCall)
    .then (function(response) {
      return response.json();

    })
    .then(function (data){

      city.textContent = data.city.name;
      currentTemp.textContent = data.list[0].main.temp;
      con.textContent = data.list[0].weather[0].description;
      speed.textContent = data.list[0].wind.speed;
      gust.textContent = data.list[0].wind.gust;

      
      curCity.append(city);
      curTemp.append(currentTemp);
      now.append(con);
      windS.append(speed);
      windG.append(gust);

      // console.log(searchInputCall);
      // console.log(data);
      // console.log(data.city.name);
/* #regionmain day 1 */
      for (var i = 0; i < data.list.length; i++) {
      // midDay = data.list[i].dt_txt;
            if(data.list[i].dt_txt.endsWith('15:00:00')){
              var mDt = [data.list[i].main.temp];
              var mDh = [data.list[i].main.humidity];
              var mDw = [data.list[i].wind.speed];
              var mDd = [data.list[i].weather[0].main];
          
              // Need date info here, either from this page or from day.js 

            // Description - will be used pick icoin via if statement
              midDayDescription.push(mDd);
              // console.log(midDayDescription);
              if(midDayDescription[0] == "Clear") {
                day1desc.append(cS);
              } if(midDayDescription[0] == "Clouds") {
                day1desc.append(fC);
              } if(midDayDescription[0] == "Rain") {
                day1desc.append(rN);
              } if(midDayDescription[0] == "Thunderstorm") {
                day1desc.append(tS);
              } if(midDayDescription[0] == "Snow") {
                day1desc.append(snow);
              } if(midDayDescription[0] == "Drizzle"){
                day1desc.append(mist);
              } 
              midDay.push(mDt);
              oneTemp.textContent = midDay[0];
              day1temp.append(oneTemp);

              midDayHumidity.push(mDh);
              oneHumidity.textContent = midDayHumidity[0];
              day1humidity.append(oneHumidity);

              midDayWind.push(mDw);
              oneWind.textContent = midDayWind[0];
              day1wind.append(oneWind);
              
              /* #endregion */
                   /*#regionmain day2 */
              
              if(midDayDescription[1] == "Clear") {
                day2desc.append(cS);
              } if(midDayDescription[1] == "Clouds") {
                day2desc.append(fC);
              } if(midDayDescription[1] == "Rain") {
                day2desc.append(rN);
              } if(midDayDescription[1] == "Thunderstorm") {
                day2desc.append(tS);
              } if(midDayDescription[1] == "Snow") {
                day2desc.append(snow);
              } if(midDayDescription[1] == "Drizzle"){
                day2desc.append(mist);
              } 
           
              twoTemp.textContent = midDay[1];
              day2temp.append(twoTemp);

              twoHumidity.textContent = midDayHumidity[1];
              day2humidity.append(twoHumidity);

              twoWind.textContent = midDayWind[1];
              day2wind.append(twoWind);
              /* #endregion */

/* #regionmain day 3 */
            
              if(midDayDescription[2] == "Clear") {
                day3desc.append(cS);
              } if(midDayDescription[2] == "Clouds") {
                day3desc.append(fC);
               } if(midDayDescription[2] == "Rain") {
                day3desc.append(rN);
              } if(midDayDescription[2] == "Thunderstorm") {
                day3desc.append(tS);
              } if(midDayDescription[2] == "Snow") {
                day3desc.append(snow);
              } if(midDayDescription[2] == "Drizzle"){
                day3desc.append(mist);
              } //else { day3desc.textContent = ' '};

              threeTemp.textContent = midDay[2];
              day3temp.append(threeTemp);

              threeHumidity.textContent = midDayHumidity[2];
              day3humidity.append(threeHumidity);

              threeWind.textContent = midDayWind[2];
              day3wind.append(threeWind);
/* #endregion */ 
      
/* #regionmain day4 */
        
              if(midDayDescription[3] == "Clear") {
                day4desc.append(cS);
              } if(midDayDescription[3] == "Clouds") {
                day4desc.append(fC);
               } if(midDayDescription[3] == "Rain") {
                day4desc.append(rN);
              } if(midDayDescription[3] == "Thunderstorm") {
                day4desc.append(tS);
              } if(midDayDescription[3] == "Snow") {
                day4desc.append(snow);
              } if(midDayDescription[3] == "Drizzle"){
                day4desc.append(mist);
              } //else { day4desc.textContent = ' '};

              fourTemp.textContent = midDay[3];
              day4temp.append(fourTemp);

              fourHumidity.textContent = midDayHumidity[3];
              day4humidity.append(fourHumidity);

              fourWind.textContent = midDayWind[3];
              day4wind.append(fourWind);
/* #endregion */

/* #region Main day 5 */

              if(midDayDescription[4] == "Clear") {
                day5desc.append(cS);
              } if(midDayDescription[4] == "Clouds") {
                day5desc.append(fC);
              } if(midDayDescription[4] == "Rain") {
                day5desc.append(rN);
              } if(midDayDescription[4] == "Thunderstorm") {
                day5desc.append(tS);
              } if(midDayDescription[4] == "Snow") {
                day5desc.append(snow);
              } if(midDayDescription[4] == "Drizzle"){
                day5desc.append(mist);
              } //else { day5desc.textContent = ' '};

              fiveTemp.textContent = midDay[4];
              day5temp.append(fiveTemp);

              fiveHumidity.textContent = midDayHumidity[4];
              day5humidity.append(fiveHumidity);

              fiveWind.textContent = midDayWind[4];
              day5wind.append(fiveWind);
            /* #endregion */
            
            } } 
            
    } )}
    
    
/* #endregion */ 
  

function storeSearch() {
  
  localStorage.setItem("City,ST", JSON.stringify(searches));
  }

function renderSearches () {
// clears seach field
  searchEntry.innerHTML = '';
  // searchCount.textContent = searches.length;
  for (var i = 0; i < searches.length; i++) {
    var place = searches[i];

    var li = document.createElement("li");
    li.textContent = place;
    li.setAttribute("data-index", i);
    li.setAttribute('type', 'button')
    li.setAttribute('id', i);
    li.addEventListener("click", function(){
      console.log(`City Selected was ${place}`)
    })
      list.appendChild(li);

      if(list.children.length > 5){
        list.removeChild(list.firstElementChild);
 
      };
  }
}



  submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  resetCurrent();
  getApiCurrent();

 
  var searchInputPresent = searchEntry.value.trim();


  if (searchInputPresent === '') {
    return;
  }

  searches.push(searchInputPresent);
  searchEntry.value = '';

  storeSearch();
  renderSearches();
  });



    

  
