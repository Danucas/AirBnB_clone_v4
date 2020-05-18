$(window).on('load', function () {
  const url = 'http://127.0.0.1:5001/api/v1/places_search/';
  $.ajax({
    type: 'POST',
    headers: {'Content-Type', 'application/json'},
    data: {},
    accepts: 'application/json',
    crossDomain: True,
    url: url,
    success: function (data) {
      console.log(data.length);
      for (let i = 0;  i < data.length; i++) {
        console.log(data[i]);
          let html = '';
	  html += '<article><div class="title_box">';
	  html += '<h2>' + data[i].name + '</h2>';
	  html += '<div class="price_by_night">$';
	  html += data[i].price_by_night + '</div></div>';
	  html += '<div class="information">';
	  html += '<div class="max_guest">';
	  html += data[i].max_guest;
	  html += ' Guests</div><div class="number_rooms">';
	  html += data[i].number_rooms;
	  html += 'Bedroom</div><div class="number_bathrooms">';
	  html += data[i].number_bathrooms;
	  html += ' Bathroom</div></div><div class="user"><b>Owner:</b> ';
	  html += data[i].owner;
	  html += '</div><div class="description">';
	  html += data[i].description;
	  html += '</div></article>';
	  const content = $(html);
	  $('.places').append(content);
      }
    },
    error: function(e){
	console.log(e.message);
    }

  });
  const chAm = {};
  $('input').change(function () {
    if (this.checked) {
      console.log('Checked');
      chAm[$(this).attr('data-id')] = $(this).attr('data-name');
      // console.log(chAm);
    } else {
      if ($(this).attr('data-id') in chAm) {
        delete chAm[$(this).attr('data-id')];
      }
    }
    let amenities = '';
    for (const id in chAm) {
      amenities += chAm[id];
      amenities += ', ';
    }
    $('.amenities > h4').text(amenities.slice(0, -2));
  });
});
