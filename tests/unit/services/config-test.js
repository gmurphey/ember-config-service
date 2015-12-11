import { moduleFor, test } from 'ember-qunit';

moduleFor('service:config', 'Unit | Service | config', {
  needs: ['config:environment']
});

test('it returns values for config paths properly', function(assert) {
  let service = this.subject();
  let result = service.get('testFixtures.foo.bar');

  assert.equal(result, 'baz');
});

test('it returns undefined for non-existent keys', function(assert) {
  let service = this.subject();
  let result = service.get('missingTestFixtures');

  assert.equal(result, undefined);
});
