window.onload = function() {
$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
  $('#info1').append(`<p>Ip: ${JSON.stringify(data.ip)}</p>`);
  $('#info1').append(`<p>Version: ${JSON.stringify(data.version)}</p>`);
  $('#info1').append(`<p>City: ${JSON.stringify(data.city)}</p>`);
  $('#info1').append(`<p>Region: ${JSON.stringify(data.region)}</p>`);
  $('#info1').append(`<p>Country: ${JSON.stringify(data.country_name)}</p>`);
  $('#info1').append(`<p>Country capital: ${JSON.stringify(data.country_capital)}</p>`);
  $('#info1').append(`<p>Region code: ${JSON.stringify(data.region_code)}</p>`);
  $('#info1').append(`<p>Country code: ${JSON.stringify(data.country_code)}</p>`);
  $('#info1').append(`<p>Continent code: ${JSON.stringify(data.continent_code)}</p>`);
  $('#info1').append(`<p>Postal: ${JSON.stringify(data.postal)}</p>`);
  $('#info2').append(`<p>Latitude: ${JSON.stringify(data.latitude)}</p>`);
  $('#info2').append(`<p>Longitude: ${JSON.stringify(data.longitude)}</p>`);
  $('#info2').append(`<p>Timezone: ${JSON.stringify(data.timezone)}</p>`);
  $('#info2').append(`<p>Utc offset: ${JSON.stringify(data.utc_offset)}</p>`);
  $('#info2').append(`<p>Country calling code: ${JSON.stringify(data.country_calling_code)}</p>`);
  $('#info2').append(`<p>Currency: ${JSON.stringify(data.currency)}</p>`);
  $('#info2').append(`<p>Currency name: ${JSON.stringify(data.currency_name)}</p>`);
  $('#info2').append(`<p>Languages: ${JSON.stringify(data.languages)}</p>`);
  $('#info2').append(`<p>Asn: ${JSON.stringify(data.asn)}</p>`);
  $('#info2').append(`<p>Org: ${JSON.stringify(data.org)}</p>`);
});
};
