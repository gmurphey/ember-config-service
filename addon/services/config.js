import Service from '@ember/service';
import { computed, get } from '@ember/object';
import { getOwner } from '@ember/application';

export default Service.extend({
  __config__: computed(function() {
    return getOwner(this).factoryFor('config:environment').class;
  }),

  unknownProperty(path) {
    return get(this, `__config__.${path}`);
  }
});
