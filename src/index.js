import _ from 'lodash';
import distance from '@turf/distance';
import helpers from '@turf/helpers'


function component() {
	var element = document.createElement('div');

	var from = helpers.point([-75.343, 39.984]);
	var to = helpers.point([-75.534, 39.123]);
	var options = {units: 'miles'};

	var distance = distance(from, to, options);


	element.innerHTML = _.join(['Hello', 'webpack', distance], ' ');

	return element;
}

document.body.appendChild(component());