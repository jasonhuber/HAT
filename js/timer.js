//The JS that does the timer stuff.
var timeoutfunct;
var secondsleft;
var tensecondsleft = 10;
function starttimer(numsec, numarrows, container)
{

  secondsleft = numsec*numarrows;
  timeoutfunct = setInterval(function(){changetime(container)}, 1000);
}

function changetime(container)
{
  var minutes, seconds;
  if (tensecondsleft< 0) {

    if (secondsleft>=60) {
      minutes = Math.floor(secondsleft / 60);
      seconds = secondsleft - minutes * 60;
    }
    else
    {
      minutes = 0;
      seconds = secondsleft;
    }
    secondsleft -=1;
  }
  else
  {

      minutes = 0;
      seconds = tensecondsleft;
      tensecondsleft -=1;
  }

  $(container).html(pad('00',minutes,true) + ":" + pad('00',seconds,true));
  if (tensecondsleft < 0 && secondsleft < 0) {
    clearTimeout(timeoutfunct);
  }
}


function pad(pad, str, padLeft) {
  if (str == undefined) return pad;
  if (padLeft) {
    return (pad + str).slice(-pad.length);
  } else {
    return (str + pad).substring(0, pad.length);
  }
}
