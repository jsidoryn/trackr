import Ember from 'ember';

export default Ember.ObjectController.extend({
  // itemController: 'post',
  periods: ['wake','breakfast', 'lunch', 'dinner', 'before bed'],
  rating: [1, 2, 3, 4, 5],
  name: "",
  period: "",
  energy: "",
  mood: "",
  notes: "",
  actions: {
    submit: function() {
      var entry = this.store.createRecord('entry', {
        name: this.get('name'),
        period: this.get('period'),
        energy: this.get('energy'),
        mood: this.get('mood'),
        notes: this.get('notes'),
        createdAt: new Date()
      });
      var controller = this;
      entry.save().then(function(entry) {
        controller.set('name', ''),
        controller.set('period',''),
        controller.set('energy',''),
        controller.set('mood',''),
        controller.set('notes','')
      });
    },
    selectPeriod: function(item) {
      this.set('period', item);
    },
    selectEnergy: function(item) {
      this.set('energy', item);
    },
    selectMood: function(item) {
      this.set('mood', item);
    }
  }
});
