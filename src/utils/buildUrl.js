const APPID = '62d91351158a0ed8ba6c81571b457551';

const buildUrl = () => null;

export const urlByName = name =>
  `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APPID}`;

export const urlById = id =>
  `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APPID}`;

