import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function(){
      var contact = this.get('model');
      contact.save();

      this.transitionToRoute('contact', contact);
    }
  }
});
