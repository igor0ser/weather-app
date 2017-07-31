const APPID = '62d91351158a0ed8ba6c81571b457551';

const baseUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APPID}&`;

export const urlByName = name => `${baseUrl}&q=${name}`;

export const urlById = id => `${baseUrl}&id=${id}`;

export const urlByCoords = ({ latitude, longitude}) =>
  `${baseUrl}&lat=${latitude}&lon=${longitude}`;
