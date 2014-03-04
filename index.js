(function (module, undefined){
	'use strict';

	var _ = require('underscore');

	var features = [];

	module.exports = {
		Feature : {
			create : function (options){
				features.push();
			},
			init : function (options){
				if (typeof process === 'object'){
					// -- we're server side
				}
				else {
					// -- we're client side
				}
			},
			getFeatures : function (){
				return _.clone(features);
			}
		}
	};

})(module);