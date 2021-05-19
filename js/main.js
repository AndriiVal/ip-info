window.onload = function() {
$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
  $('#info1').append(`<p>Ip: ${JSON.stringify(data.ip, null, 2)}</p>`);
  $('#info1').append(`<p>Version: ${JSON.stringify(data.version, null, 2)}</p>`);
  $('#info1').append(`<p>City: ${JSON.stringify(data.city, null, 2)}</p>`);
  $('#info1').append(`<p>Region: ${JSON.stringify(data.region, null, 2)}</p>`);
  $('#info1').append(`<p>Country: ${JSON.stringify(data.country_name, null, 2)}</p>`);
  $('#info1').append(`<p>Country capital: ${JSON.stringify(data.country_capital, null, 2)}</p>`);
  $('#info1').append(`<p>Region code: ${JSON.stringify(data.region_code, null, 2)}</p>`);
  $('#info1').append(`<p>Country code: ${JSON.stringify(data.country_code, null, 2)}</p>`);
  $('#info1').append(`<p>Continent code: ${JSON.stringify(data.continent_code, null, 2)}</p>`);
  $('#info1').append(`<p>Postal: ${JSON.stringify(data.postal, null, 2)}</p>`);
  $('#info2').append(`<p>Latitude: ${JSON.stringify(data.latitude, null, 2)}</p>`);
  $('#info2').append(`<p>Longitude: ${JSON.stringify(data.longitude, null, 2)}</p>`);
  $('#info2').append(`<p>Timezone: ${JSON.stringify(data.timezone, null, 2)}</p>`);
  $('#info2').append(`<p>Utc offset: ${JSON.stringify(data.utc_offset, null, 2)}</p>`);
  $('#info2').append(`<p>Country calling code: ${JSON.stringify(data.country_calling_code, null, 2)}</p>`);
  $('#info2').append(`<p>Currency: ${JSON.stringify(data.currency, null, 2)}</p>`);
  $('#info2').append(`<p>Currency name: ${JSON.stringify(data.currency_name, null, 2)}</p>`);
  $('#info2').append(`<p>Languages: ${JSON.stringify(data.languages, null, 2)}</p>`);
  $('#info2').append(`<p>Asn: ${JSON.stringify(data.asn, null, 2)}</p>`);
  $('#info2').append(`<p>Org: ${JSON.stringify(data.org, null, 2)}</p>`);
});
};
