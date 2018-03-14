var notification = {
  "facebook": 0,
  "twitter":0,
  "instagram":0,
  "whatsapp":0
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);

  document.getElementById('clock').innerHTML = h + ":" + m ;

  var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var dateNames = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th","12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd","23rd", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById('Date').innerHTML = dayNames[today.getDay()] + " " + dateNames[today.getDate()]+ " " + monthNames[today.getMonth()];
  var t = setTimeout(startTime, 500);

}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

$(document).ready(function(){
  $('#FB').click(function(){
    $('#main').fadeOut(500);
    $('#FB0').fadeIn(500);
  });
});

$(document).ready(function(){
  $('#TW').click(function(){
    $('#main').hide();
    $('#TW0').fadeIn(500);

  });
});

$(document).ready(function(){
  $('#INST').click(function(){
    $('#main').fadeOut(500);
    $('#INST0').fadeIn(500);
  });
});

$(document).ready(function(){
  $('#WU').click(function(){
    $('#main').fadeOut(500);
    $('#WU0').fadeIn(500);
  });
});

$(document).ready(function(){
  $('.return').click(function(){
    $('#main').show();
    $('#FB0').fadeOut(500);
    $('#TW0').fadeOut(500);
    $('#WU0').fadeOut(500);
    $('#INST0').fadeOut(500);
    main();
  });
});


function main(){
  document.body.style.background = '#212121';
}


function FB(){
  document.body.style.backgroundColor = '#3b5998';
}

function TW(){
  document.body.style.backgroundColor = '#55acee';
}

function WU(){
  document.body.style.backgroundColor = '#4FCE5D';
}
function INST(){
  document.body.style.background = '#f09433'
  document.body.style.background = '-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
  document.body.style.background = '-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
  document.body.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
}
