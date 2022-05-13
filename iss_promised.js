const request = require('request-promise-native');

const fetchMyIP = (() => {
  return request('https://api.ipify.org?format=json')
});

const fetchCoordsByIP = ((data) => {
  let ip = JSON.parse(data).ip;
  return request(`https://freegeoip.app/json/${ip}`)
});

const fetchISSFlyOverTimes = ((data) => {
  let {latitude, longitude} = JSON.parse(data);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
});

const nextISSTimesForMyLocation = (() => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const {response} = JSON.parse(data);
      return response;
    })
})

module.exports = {nextISSTimesForMyLocation};