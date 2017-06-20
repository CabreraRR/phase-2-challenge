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
	},
	snippet: function (string, maxlength) {
		if (string.length > maxlength) {
			return string.slice(0, maxlength) + "...";
		}
		if (string.length < maxlength) {
			return string;
		} else {
			return "not a string";
		}
	},
	numProps: function (obj) {
		return Object.keys(obj).length;
	}
}


//get a snippet from text



////number of properties
//
//

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
