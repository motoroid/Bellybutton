//none work, maybe it's the api call

//const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then(receivedData => console.log(receivedData));

const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(data => console.log(data));

//only details from vandenberg air force base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

