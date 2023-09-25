function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
  scuberGreetingForFeet = 'This one is on me!';
  return scuberGreetingForFeet;
} else if (someValue > 400 && someValue <= 2000) {
  scuberGreetingForFeet = 'That will be twenty bucks.';
  return scuberGreetingForFeet;
} else if (someValue > 2000 && someValue <= 2500 ) {
  scuberGreetingForFeet = 'I will gladly take your thirty bucks.';
  return scuberGreetingForFeet;
} else if (someValue > 2500) {
  scuberGreetingForFeet = 'No can do.';
  return scuberGreetingForFeet;
}
}


function ternaryCheckCity(city){
  // Write your code here!
/*if (city === "NYC" ) {
  ternaryCheckCity = 'Ok, sounds good.';
  return ternaryCheckCity;
} else ternaryCheckCity = "No go."
  return ternaryCheckCity;*/

  ternaryCheckCity = city === "NYC" ? 'Ok, sounds good.' : "No go.";
  return ternaryCheckCity;
}



function switchOnCharmFromTip(tip){
  // Write your code here!
  /*if (tip === "generous" ) {
    switchOnCharmFromTip = 'Thank you so much.';
    return switchOnCharmFromTip;
  } else if (tip === 'not as generous') {
    switchOnCharmFromTip = 'Thank you.';
    return switchOnCharmFromTip;
  } else switchOnCharmFromTip = 'Bye.';
  return switchOnCharmFromTip; */
switch (tip) {
  case "generous":
    switchOnCharmFromTip = 'Thank you so much.';
    return switchOnCharmFromTip;
    break;
  case 'not as generous':
    switchOnCharmFromTip = 'Thank you.';
    return switchOnCharmFromTip;
    break;
  default:
    switchOnCharmFromTip = 'Bye.';
    return switchOnCharmFromTip;
}
}
