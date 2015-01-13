import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function(){
      self = this;
      var newUser = this.get('model');
      newUser.save().then(function(){
        self.transitionToRoute('contact', newUser);
      });
    }
  }
});
