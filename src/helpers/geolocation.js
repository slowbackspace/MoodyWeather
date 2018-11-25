export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported");
    } else {
      navigator.geolocation.watchPosition(
        position => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        err => {
          reject(`Can't get current location: ${err.message}`);
        }
      );
    }
  });
}