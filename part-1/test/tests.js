const expect = require('chai').expect;
const assert = require('chai').assert;
const functions = require('../functions');

describe('functions', function () {
	describe('weekday()', function () {
		it('weekday should return a day of the week', function () {
			let weekdayResult = functions.weekday('February 15, 1991');
			expect(weekdayResult).to.be.oneOf(['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
		});
		it('weekday should return "not a date"', function () {
			let weekdayResult = functions.weekday('Groundhog\'s Day');
			assert.equal(weekdayResult, 'not a date');
		});
	});
	describe('snippet()', function () {
		it('snippet should return a shortened phrase', function () {
			let snippetResult = functions.snippet('For the Horde!!!!!', 11);
			assert.equal(snippetResult, "For the Hor...");
		});
		it('snippet should return "not a string"', function(){
			let snippetResult = functions.snippet(525600, 100);
			assert.equal(snippetResult,'not a string');
		})
	});
});
