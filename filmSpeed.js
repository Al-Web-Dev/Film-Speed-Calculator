// var timelineSpeed = 25
// var sourceSpeed = 119.88
// var playBackPercentage = timelineSpeed / sourceSpeed * 100;

// console.log(playBackPercentage);



var playBackSpeed = function (timelineSpeed, sourceSpeed) {
	return timelineSpeed/sourceSpeed*100;
};



console.log(playBackSpeed(25,119.88));

