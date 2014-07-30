import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.store.find('entry', params.entry_id);
  }
});
