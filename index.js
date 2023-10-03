// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
  return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation){
  return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination){
  const numberOfFeet = distanceTravelledInFeet(start, destination)

  if(numberOfFeet <= 400){
      return 0
  }
  else if(numberOfFeet > 400 && numberOfFeet <= 2000){
      let numOfFeetToCharge = numberOfFeet - 400
      return numOfFeetToCharge * 0.02
  }
  else if(numberOfFeet > 2000 && numberOfFeet < 2500){
      return 25
  }
  else{
      return 'cannot travel that far'
  }
}