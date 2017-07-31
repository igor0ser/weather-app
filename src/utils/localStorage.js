const addAppKey = key => `awesome-weather-app--${key}`;

const save = (key, value) => {
  localStorage.setItem(addAppKey(key), JSON.stringify(value));
}

export const load = (key) => {
  const json =  localStorage.getItem(addAppKey(key));
  return json ? JSON.parse(json) : null
}

export const localStorageMiddlware = store => next => action => {
  next(action);

  if (action.type.endsWith('CITY')) {
    save('cities', store.getState().cities);
  }
};