import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('entry');
  },
  actions: {
    delete: function(entry) {
      entry.deleteRecord(); 
      entry.save();
    }
  }
});
