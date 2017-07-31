const APPID = '62d91351158a0ed8ba6c81571b457551';

const apiTypeCodes = {
  name: 'q',
  id: 'id'
};

const buildUrl = (type, value) =>
  `http://api.openweathermap.org/data/2.5/weather?${apiTypeCodes[type]}=${value}&appid=${APPID}&units=metric`;

export const urlByName = name => buildUrl('name', name);

export const urlById = id => buildUrl('id', id);

export const urlByCoords = ({ latitude, longitude}) =>
  `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APPID}&units=metric`;
