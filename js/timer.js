//The JS that does the timer stuff.
var timeoutfunct;
function starttimer(numsec, numarrows, container)
{
  $(container).html(numsec*numarrows);
  timeoutfunct = setInterval(function(){changetime(container)}, 1000);
}

function changetime(container)
{
  $(container).html($(container).html()-1);
  if ($(container).html() <= 0) {
    clearTimeout(timeoutfunct);
  }
}
