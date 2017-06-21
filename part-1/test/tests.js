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
		it('snippet should return "not a string"', function () {
			let snippetResult = functions.snippet(525600, 100);
			assert.equal(snippetResult, 'not a string');
		})
	});
	describe('numProps()', function () {
		it('numProps should return the number of properties in the obj', function () {
			let char = {
				name: 'BoredTank',
				level: 110,
				class: "Paladin",
				spec: "Protection"
			};
			let numPropsResult = functions.numProps(char);
			assert.equal(numPropsResult, '4');
		});
		it('numProps should return "no properties"', function () {
			let numPropsResult = functions.numProps(10);
			assert.equal(numPropsResult, 'no properties');
		});
	});
	describe('filterBetween()', function () {
		it('filterBetween should return the last number', function () {
			let array = [1, 2, 3, 4, 5];
			let min = 4;
			let max = 100;
			let filterBetweenResult = functions.filterBetween(array, min, max);
			assert.equal(filterBetweenResult, '5');
		});
		it('filterBetween should return "unable to filter between"', function (){
			let array = "yo quiero tacobell";
			let min = 4;
			let max = 100;
			let filterBetweenResult = functions.filterBetween(array, min, max);
			assert.equal(filterBetweenResult, "unable to filter between");
		});
	});
});
