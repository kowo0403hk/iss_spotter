const {nextISSTimesForMyLocation} = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes)=>{
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
  
//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP('99.199.90.10', (error, coordinates) => {
//   if (error) {
//     console.log('Error', error);
//     return;
//   }
//   console.log('It worked! Returned coordinates: ', coordinates);
// });

// fetchISSFlyOverTimes(coordinates,(error, result) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(result);
// });