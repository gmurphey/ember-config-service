import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const {
  Service,
  computed,
  get
} = Ember;

export default Service.extend({
  __config__: computed(function() {
    return getOwner(this)._lookupFactory('config:environment');
  }),

  unknownProperty(path) {
    return get(this, `__config__.${path}`);
  }
});
