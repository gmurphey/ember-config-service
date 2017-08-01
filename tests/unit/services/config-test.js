import { moduleFor, test } from 'ember-qunit';
import { get } from '@ember/object';

moduleFor('service:config', 'Unit | Service | config', {
  needs: ['config:environment']
});

test('it returns values for config paths properly', function(assert) {
  let service = this.subject();
  let result = get(service, 'testFixtures.foo.bar');

  assert.equal(result, 'baz');
});

test('it returns undefined for non-existent keys', function(assert) {
  let service = this.subject();
  let result = get(service, 'missingTestFixtures');

  assert.equal(result, undefined);
});
