import Ember from 'ember';

export default Ember.ObjectController.extend({
  deleteMode: false,

  actions: {
    edit: function(){
      this.transitionToRoute('contact.edit');
    },
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      this.get('model').deleteRecord();
      this.get('model').save();
      this.transitionToRoute('contacts');

      this.set('deleteMode', false);
    }
  }
});
