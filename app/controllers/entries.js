import Ember from 'ember';

export default Ember.ArrayController.extend({
	totalEnergy: function() {
		return this.get('model').reduce(function(sum,record) {
			return sum + record.get('energy')
		}, 0);
	}.property('@each'),
	averageEnergy: function() {
		var ave = this.get('totalEnergy') / this.get('model.length')
		return Math.floor(ave)
	}.property('@each')
});
