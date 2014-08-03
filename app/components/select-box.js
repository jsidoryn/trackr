import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['box'],
	classNameBindings: ['size', 'isSelected'],
	isSelected: '',
	click: function() {
		this.set('isSelected', 'isSelected')
	  this.sendAction('action', this.get('ranking'));
	}
});
