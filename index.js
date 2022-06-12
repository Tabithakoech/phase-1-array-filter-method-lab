// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(drivers,name){
    return drivers.filter(function(driverNames)
    {
        return driverNames.toLowerCase() === name.toLowerCase();
    })

  }

  function fuzzyMatch(array, string) {
    return array.filter(function(element) {
        return element.startsWith(string);
    });
}

function matchName(array, name) {
    return array.filter(function(driver) {
        return driver.name === name;
    });
}
