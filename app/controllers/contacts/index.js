import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['lastName', 'firstName'],

  contactsCount: function(){
    return this.get('model.length');
  }.property('@each')
});
