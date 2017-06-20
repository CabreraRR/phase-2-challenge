//show a weekday
module.exports = {
	weekday: function (date) {
		var day = new Date(date).getDay();
		if (day == 0) {
			return "Sunday";
		}
		if (day == 1) {
			return "Monday";
		}
		if (day == 2) {
			return "Tuesday";
		}
		if (day == 3) {
			return "Wednesday";
		}
		if (day == 4) {
			return "Thursday";
		}
		if (day == 5) {
			return "Friday";
		}
		if (day == 6) {
			return "Saturday";
		} else {
			return "not a date";
		}
	}
};


////get a snippet from text
//
//function snippet(string, maxlength) {
//	if (string.length > maxlength) {
//		console.log(string.slice(0, maxlength) + "...");
//	} else {
//		console.log(string);
//	}
//};
//
////number of properties
//
//
//function numProps(obj) {
//	newObj = Object.keys(obj);
//	console.log(newObj.length);
//};
//
////filter between
//
//function filterBetween(arr, min, max) {
//	var newArr = [];
//	for (var i = 0; i <= arr.length; i++) {
//		if (arr[i] > min && arr[i] < max) {
//			newArr.push(arr[i]);
//		};
//	};
//	console.log(newArr);
//};
