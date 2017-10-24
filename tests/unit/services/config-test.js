import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('service:config', function(hooks) {
  setupTest(hooks);

  test('it returns values for config paths properly', function(assert) {
    let service = this.owner.lookup('service:config');
    let result = get(service, 'testFixtures.foo.bar');

    assert.equal(result, 'baz');
  });

  test('it returns undefined for non-existent keys', function(assert) {
    let service = this.owner.lookup('service:config');
    let result = get(service, 'missingTestFixtures');

    assert.equal(result, undefined);
  });
});