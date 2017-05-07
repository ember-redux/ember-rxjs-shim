import { test, module } from 'qunit';
import Subject from 'rxjs/Subject';

module('rxjs export tests');

test('exports function', function(assert) {
  assert.equal(typeof Subject, 'object');
});
