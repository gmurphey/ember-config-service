import Ember from 'ember';

const {
  Service,
  computed,
  get,
  getOwner
} = Ember;

export default Service.extend({
  __config__: computed(function() {
    return getOwner(this).factoryFor('config:environment').class;
  }),

  unknownProperty(path) {
    return get(this, `__config__.${path}`);
  }
});
