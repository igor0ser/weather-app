const getLocation = () => new Promise((resolve, reject) => {
  window.navigator.geolocation.getCurrentPosition(
    postion => resolve(postion),
    error => reject(error)
  );
});

export default getLocation;
