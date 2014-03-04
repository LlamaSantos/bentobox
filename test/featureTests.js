describe('Feature', function (){
	var assert = require('assert');
	var Feature = require('../index.js').Feature;
	
	it ('should not be null on require', function (){
		assert.ok(Feature, 'Feature is null or undefined.');
	});
	
	describe('create', function (){
		it ('should create and add the feature to the internal list of features.', function (){
			Feature.create({
				behavior : function (){
					
				}
			});
		})
	})
})