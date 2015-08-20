  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    $( "#datepicker" ).datepicker();
    var availableTags=[
                   	'강남구∣서울', '강동구∣서울', '강북구∣서울', '강서구∣서울',
                   	'관악구∣서울', '광진구∣서울', '구로구∣서울', '금천구∣서울',
                   	'노원구∣서울', '도봉구∣서울', '동대문구∣서울', '동작구∣서울',
                   	'마포구∣서울', '서대문구∣서울', '서초구∣서울', '성동구∣서울',
                   	'성북구∣서울', '송파구∣서울', '양천구∣서울', '영등포구∣서울',
                   	'용산구∣서울', '은평구∣서울', '종로구∣서울', '중구∣서울',
                   	'중랑구∣서울', 'hing'
                   ];

    $('#tags').autocomplete({
		source: availableTags
	});
    
  });