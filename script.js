const apiKey = '5d066958a60d315387d9492393935c19';

const root = document.getElementById('root');
const popup = document.getElementById('popup');
const textInput = document.getElementById('text-input');
const form = document.getElementById('form');

let store = {
  city: 'London',
  temperature: 0,
  description: '',
  properties: {
    cloudcover: {},
    humidity: {},
    windSpeed: {},
    windDirection: {},
    pressure: {},
    visibility: {}
  }
};

const getData = () => {
  const query = localStorage.getItem("query") || store.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${apiKey}`;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', responseReceivedHandler);
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.send();
};

function responseReceivedHandler() {
  if (this.status === 200) {
    const {
      clouds: { all },
      main: { temp, humidity, pressure },
      visibility,
      weather,
      name,
      wind: { speed, deg}
    } = this.response;

    store = {
      ...store,
      city: name,
      temp,
      description: weather[0].description,
      icon: weather[0].icon,
      properties: {
        cloudcover: {
          title: 'cloudcover',
          value: `${all}%`,
          icon: 'cloud.png'
        },
        humidity: {
          title: 'humidity',
          value: `${humidity}%`,
          icon: 'humidity.png'
        },
        windSpeed: {
          title: 'wind speed',
          value: `${speed} km/h`,
          icon: 'wind.png'
        },
        windDirection: {
          title: 'wind direction',
          value: `${deg} deg`,
          icon: 'winddirection.png'
        },
        pressure: {
          title: 'pressure',
          value: `${pressure} %`,
          icon: 'gauge.png'
        },
        visibility: {
          title: 'visibility',
          value: `${visibility}%`,
          icon: 'visibility.png'
        }
      }
    }
    renderComponent();
  }
};

const renderProperty = (properties) => {
  return Object.values(properties)
    .map(({ title, value, icon }) => {
      return `<div class="property">
            <div class="property-icon">
              <img src="./img/icons/${icon}" alt="">
            </div>
            <div class="property-info">
              <div class="property-info__value">${value}</div>
              <div class="property-info__description">${title}</div>
            </div>
          </div>`;
    })
    .join("");
};

const markup = () => {
  const { city, description, temp, properties, icon } =
    store;

  return `<div class="container">
            <div class="top">
              <div class="city">
                <div class="city-subtitle">Weather Today in</div>
                  <div class="city-title" id="city">
                  <span>${city}</span>
                </div>
              </div>
              <div class="city-info">
                <div class="top-left">
                <img class="icon" src="http://openweathermap.org/img/w/${icon}.png" alt="" />
                <div class="description">${description}</div>
              </div>
              <div class="top-right">
                <div class="city-info__title">${temp}°</div>
              </div>
            </div>
          </div>
        <div id="properties">${renderProperty(properties)}</div>
      </div>`;
};

const togglePopupClass = () => {
  popup.classList.toggle("active");
};

const renderComponent = () => {
  root.innerHTML = markup();
  const city = document.getElementById("city");
  city.addEventListener("click", togglePopupClass);
  const close = document.getElementById("close");
  close.addEventListener("click", togglePopupClass);
};

const handleInput = (e) => {
  store = {
    ...store,
    city: e.target.value,
  };
};

const handleSubmit = (e) => {
  e.preventDefault();
  const value = store.city;

  if (!value) return null;

  localStorage.setItem("query", value);
  getData();
  togglePopupClass();
};

form.addEventListener("submit", handleSubmit);
textInput.addEventListener("input", handleInput);

getData();
