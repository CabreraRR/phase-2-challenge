module.exports = { //show a weekday
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
	snippet: function (string, maxlength) { //get a snippet from text
		if (string.length > maxlength) {
			return string.slice(0, maxlength) + "...";
		}
		if (string.length < maxlength) {
			return string;
		} else {
			return "not a string";
		}
	},
	numProps: function (obj) { //number of properties
		if (Object.keys(obj).length > 0) {
			return Object.keys(obj).length;
		} else {
			return "no properties";
		}
	},
	filterBetween: function(array, min, max) { //filter between
		var newArr = [];
		if (Array.isArray(array)){
		for (var i = 0; i <= array.length; i++) {
			if (array[i] > min && array[i] < max) {
				newArr.push(array[i]);
			};
		};
		return newArr;
		} else {
			return "unable to filter between"
		}
	}
}
