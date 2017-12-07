import ObjectProxy from '@ember/object/proxy';
import { getOwner } from '@ember/application';
import { set } from '@ember/object';

let configService = ObjectProxy.extend({
  init() {
    set(this, 'content', getOwner(this).factoryFor('config:environment').class);
  }
});

configService.reopenClass({
  isServiceFactory: true
});

export default configService;
