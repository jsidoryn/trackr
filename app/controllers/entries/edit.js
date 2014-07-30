import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function(foo) {
      foo.set('name', foo.get('name'))
      foo.save();
    }
  }
});
