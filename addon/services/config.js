import Ember from 'ember';
import getOwner from 'ember-getowner-polyfill';

const {
  Service,
  get
} = Ember;

export default Service.extend({
  unknownProperty(path) {
    return get(getOwner(this)._lookupFactory('config:environment'), path);
  }
});
