const addAppKey = (key, userId) => `awesome-weather-app--${userId}--${key}`;

const save = (key, value, userId) => {
  localStorage.setItem(addAppKey(key, userId), JSON.stringify(value));
};

export const load = (key, userId) => {
  const json = localStorage.getItem(addAppKey(key, userId));
  return json ? JSON.parse(json) : null;
};

export const localStorageMiddlware = store => next => (action) => {
  next(action);

  if (action.type.endsWith('CITY')) {
    const { cities, auth } = store.getState();
    save('cities', cities, auth.userId);
  }
};
