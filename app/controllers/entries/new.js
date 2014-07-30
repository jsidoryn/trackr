import Ember from 'ember';

export default Ember.ObjectController.extend({
  periods: ['wake','breakfast', 'lunch', 'dinner', 'before bed'],
  name: "",
  period: "",
  actions: {
    submit: function() {
      var entry = this.store.createRecord('entry', {
        name: this.get('name'),
        period: this.get('period')
      });
      entry.save();
    },
    selectPeriod: function(item) {
      this.set('period', item);
      // console.log('model');
    }
  }
});
