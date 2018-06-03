// Task1

var array = [];
for (var i = 0; i < 100; i++) {
	array[i] = Math.floor(Math.random() * 1001);
} 
var min = array[0];
var max = array[0];
for (var i = 0; i < array.length; i++){
	if (array[i] < min) {
		min = array[i];
	}
	else if(array[i] > max) {
		max = array[i];
	}
}
$('#array').val(array);
$('#max').val(max);
$('#min').val(min);
$('#Subtraction').val(max-min);


// Task2

function Count_Century(year) {
	var century;
	year = $('#year').val();
	
	if(year<100){
		$('#century').val(1);
	}
	else {
		century = (year/100)+1;
		$('#century').val(Math.floor(century));
	}
	if(year%100==0){
		century = year/100;
		$('#century').val(century);
	}	
}


// Task3

   function playvideo() {
   	 audio.play();
   }
   function pauseaudio(){
   	audio.pause();
   }
   function volume(){
   }

var audio = document.getElementById("myaudio"); 
var audio2 = document.getElementById("myaudio2"); 
  $('#play').click( function (){
  	if(audio.paused==true){
  		audio.play();
  	}
  	if(audio2.paused==false){
  		audio.pause();
  	}
  });
  $('#pause').click( function (){
  	audio.pause();
  	audio2.pause();
  });
  $('#next').click(function(){
  	audio2.load();
  	audio2.play();
  	audio.pause();
  });
   $('#prev').click(function(){
  	audio.load();
  	audio.play();
  	audio2.pause();
  });
