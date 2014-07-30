import DS from 'ember-data';

// export default DS.FixtureAdapter;

export default DS.LSAdapter.extend({
  namespace: 'trackr'
});