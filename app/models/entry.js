import DS from 'ember-data';

var Entry =  DS.Model.extend({
  name: DS.attr('string', {dafaultValue: "Jason's entry"}),
  energy: DS.attr('number'),
  mood: DS.attr('number'),
  focus: DS.attr('number'),
  period: DS.attr('string'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date')
});

Entry.reopenClass({
  FIXTURES: [
    {
      id:1, 
      name: 'jason',
      energy: 3,
      period: 'breakfast',
      createdAt: Date.now()
    }, {
      id:2, 
      name: 'kevin',
      energy: 2,
      period: 'lunch',
      createdAt: Date.now()
    }
  ]
});

export default Entry;