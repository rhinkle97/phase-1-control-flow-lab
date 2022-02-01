let result

function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    result = 'This one is on me!'
    return result;
  }
  else if (ride > 2000 && ride < 2500) {
    result = 'I will gladly take your thirty bucks.'
    return result;
  }
  else (ride > 2500)
    result = 'No can do.'
    return result;
}

function ternaryCheckCity(city) {
  city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.');
  return result;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
  case 'generous' : result = 'Thank you so much.';
  break;
  case 'not as generous' : result = 'Thank you.';
  break;
  default : result = 'Bye.';
  }
  return result;
}