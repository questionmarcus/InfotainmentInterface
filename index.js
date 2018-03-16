var notification = {
  "facebook": 0,
  "twitter":0,
  "instagram":0,
  "whatsapp":0
}

var notifNoise = new Audio('ahhAmazing.wav')

var stationary = true;

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
    if (stationary) {
      FB()
      $('#FB0 h1').text((notification.facebook > 0) ? "You have "+notification.facebook+" notifications!" : "You have no notifications")
      if (notification.facebook > 0) {
        $('#FB0 .social-icon').hide();
        $('#FB0 .w3-display-middle img').show()
        $('#FB0 .notification-pic').show()
      } else {
        $('#FB0 .social-icon').show();
        $('#FB0 .w3-display-middle img').hide()
        $('#FB0 .notification-pic').hide()
      }
      $('#main').fadeOut(500);
      $('#FB0').fadeIn(500);
    } else {
      $('#warning-pane').fadeIn(500).delay(1000).fadeOut(500);
    }
  });
});

$(document).ready(function(){
  $('#TW').click(function(){
    if (stationary) {
    TW()
    $('#TW0 h1').text((notification.twitter > 0) ? "You have "+notification.twitter+" notifications!" : "You have no notifications")
    if (notification.twitter > 0) {
      $('#TW0 .w3-display-middle img').show()
    } else {
      $('#TW0 .w3-display-middle img').hide()
    }
    $('#main').hide();
    $('#TW0').fadeIn(500);
  } else {
    $('#warning-pane').fadeIn(500).delay(1000).fadeOut(500);
  }
  });
});

$(document).ready(function(){
  $('#INST').click(function(){
    if (stationary) {
    INST()
    $('#INST0 h1').text((notification.instagram > 0) ? "You have "+notification.instagram+" notifications!" : "You have no notifications")
    if (notification.instagram > 0) {
      $('#INST0 .social-icon').hide();
      $('#INST0 .w3-display-middle img').show()
      $('#INST0 .notification-pic').show()
    } else {
      $('#INST0 .social-icon').show();
      $('#INST0 .w3-display-middle img').hide()
      $('#INST0 .notification-pic').hide()
    }
    $('#main').fadeOut(500);
    $('#INST0').fadeIn(500);
  } else {
    $('#warning-pane').fadeIn(500).delay(1000).fadeOut(500);
  }
  });
});

$(document).ready(function(){
  $('#WU').click(function(){
    if (stationary) {
    WU();
    $('#WU0 h1').text((notification.whatsapp > 0) ? "You have "+notification.whatsapp+" notifications!" : "You have no notifications")
    if (notification.whatsapp > 0) {
      $('#WU0 .w3-display-middle img').show()
    } else {
      $('#WU0 .w3-display-middle img').hide()
    }
    $('#main').fadeOut(500);
    $('#WU0').fadeIn(500);
  } else {
    $('#warning-pane').fadeIn(500).delay(1000).fadeOut(500);
  }
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

$('body').keypress(function(event) {
  console.log(event.which)
  switch (event.which) {
    case 102: // f key
      incrementFB();
      notifNoise.play();
      break;
    case 116: // t key
      incrementTW();
      notifNoise.play();
      break;
    case 105: // i key
      incrementINST()
      notifNoise.play();
      break;
    case 119: //w key
      incrementWA();
      notifNoise.play();
      break;
    case 113: // q keypress
      clearNotifications()
      break;
     case 32: // space bar
      toggleStationary()
      break;
  }
})

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

function updateNotifications() {
  if (notification.facebook > 0) {
    $('#FB .notification').show();
    $('#FB .notification').text(notification.facebook);
  } else {
    $('#FB .notification').hide()
  }
  if (notification.twitter > 0) {
    $('#TW .notification').show();
    $('#TW .notification').text(notification.twitter);
  } else {
    $('#TW .notification').hide()
  }
  if (notification.instagram > 0) {
    $('#INST .notification').show()
    $('#INST .notification').text(notification.instagram);
  } else {
    $('#INST .notification').hide()
  }
  if (notification.whatsapp > 0) {
      $('#WU .notification').show()
      $('#WU .notification').text(notification.whatsapp);
  } else {
    $('#WU .notification').hide()
  }
}

function incrementFB() {
  notification.facebook++;
  FB()
  $('#FB0 h1').text((notification.facebook > 0) ? "You have "+notification.facebook+" notifications!" : "You have no notifications")
  if (notification.facebook > 0) {
    $('#FB0 .social-icon').show();
    $('#FB0 .w3-display-middle img').show()
    $('#FB0 .notification-pic').hide()
  }
  $('#main').hide()
  $('#FB0').fadeIn(500).delay(2000).fadeOut(500, function() {
    $('#main').fadeIn(500);
    $('#FB0').fadeOut(500);
    $('#TW0').fadeOut(500);
    $('#WU0').fadeOut(500);
    $('#INST0').fadeOut(500);
    main()
  });
  updateNotifications();
}

function incrementTW() {
  notification.twitter++;
  TW()
  $('#TW0 h1').text((notification.twitter > 0) ? "You have "+notification.twitter+" notifications!" : "You have no notifications")
  if (notification.twitter > 0) {
    $('#TW0 .w3-display-middle .steering-wheel').show()
  } else {
    $('#TW0 .w3-display-middle .steering-wheel').hide()
  }
  $('#main').hide()
  $('#TW0').fadeIn(500).delay(2000).fadeOut(500, function() {
    $('#main').fadeIn(500);
    $('#FB0').fadeOut(500);
    $('#TW0').fadeOut(500);
    $('#WU0').fadeOut(500);
    $('#INST0').fadeOut(500);
    main()
  });
  updateNotifications();
}

function incrementINST() {
  notification.instagram++;
  INST()
  $('#INST0 h1').text((notification.instagram > 0) ? "You have "+notification.instagram+" notifications!" : "You have no notifications")
  if (notification.instagram > 0) {
    $('#INST0 .social-icon').show();
    $('#INST0 .w3-display-middle img').show()
    $('#INST0 .notification-pic').hide()
  }
  $('#main').hide()
  $('#INST0').fadeIn(500).delay(2000).fadeOut(500, function() {
    $('#main').fadeIn(500);
    $('#FB0').fadeOut(500);
    $('#TW0').fadeOut(500);
    $('#WU0').fadeOut(500);
    $('#INST0').fadeOut(500);
    main()
  });
  updateNotifications();
}

function incrementWA() {
  notification.whatsapp++;
  WU()
  $('#WU0 h1').text((notification.whatsapp > 0) ? "You have "+notification.whatsapp+" notifications!" : "You have no notifications")
  if (notification.whatsapp > 0) {
    $('#WU0 .w3-display-middle steering-wheel').show()
  } else {
    $('#WU0 .w3-display-middle steering-wheel').hide()
  }
  $('#main').hide()
  $('#WU0').fadeIn(500).delay(2000).fadeOut(500, function() {
    $('#main').fadeIn(500);
    $('#FB0').fadeOut(500);
    $('#TW0').fadeOut(500);
    $('#WU0').fadeOut(500);
    $('#INST0').fadeOut(500);
    main()
  });
  updateNotifications();
}

function clearNotifications() {
  notification.facebook = 0;
  notification.twitter = 0;
  notification.instagram = 0;
  notification.whatsapp = 0
  updateNotifications();
}

function toggleStationary() {
  if (stationary) {
    stationary = false;
    console.log("car is now moving")
  } else {
    stationary = true;
    console.log("car is now stopped")
  }
}
