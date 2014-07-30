import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TrackrENV.locationType
});

Router.map(function() {
  this.resource('entries', function() {
    this.route('entry', {path: '/:entry_id'});
    this.route('new');
    this.route('edit', {path: '/:entry_id/edit'});
  });
});

export default Router;
