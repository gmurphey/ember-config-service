import ObjectProxy from '@ember/object/proxy';
import { getOwner } from '@ember/application';

let configService = ObjectProxy.extend({
  init() {
    this.content = getOwner(this).factoryFor('config:environment').class;
    this._super(...arguments);
  }
});

configService.reopenClass({
  isServiceFactory: true
});

export default configService;
