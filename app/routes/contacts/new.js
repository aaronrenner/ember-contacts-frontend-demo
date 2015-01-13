import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('contact');
  },
  renderTemplate: function(){
    this.render('contact.edit', {
      controller: 'contacts.new'
    });
  },
  actions:{
    willTransition: function(transition){
      var contact = this.controller.get('model');
      if (contact.get('isNew')){
        contact.deleteRecord();
      }

      return true;
    }
  }
});
