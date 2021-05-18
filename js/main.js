window.onload = function() {
$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
  $('#info').append(`<p>Ip: ${JSON.stringify(data.ip, null, 2)}</p>`);
  $('#info').append(`<p>Version: ${JSON.stringify(data.version, null, 2)}</p>`);
  $('#info').append(`<p>City: ${JSON.stringify(data.city, null, 2)}</p>`);
  $('#info').append(`<p>Region: ${JSON.stringify(data.region, null, 2)}</p>`);
  $('#info').append(`<p>Country: ${JSON.stringify(data.country_name, null, 2)}</p>`);
  $('#info').append(`<p>Country capital: ${JSON.stringify(data.country_capital, null, 2)}</p>`);
  $('#info').append(`<p>Latitude: ${JSON.stringify(data.latitude, null, 2)}</p>`);
  $('#info').append(`<p>Longitude: ${JSON.stringify(data.longitude, null, 2)}</p>`);
  
});
};
