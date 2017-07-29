const APPID = '62d91351158a0ed8ba6c81571b457551';

export const urlByName = name =>
  `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APPID}`;


