// Code your solution in this filefunction findMatching(drivers, string) {
function findMatching(drivers, string) {
  let matchingDrivers = drivers.filter(function (match) {return match.toUpperCase() === string.toUpperCase()});
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {

   let matchingFuzzy = drivers.filter(function (match) {return match.startsWith(string)})
  return matchingFuzzy;
}

function matchName(drivers, string) {
  let matchingDrivers = drivers.filter(function (match) {return match.name === string})
  return matchingDrivers
}
