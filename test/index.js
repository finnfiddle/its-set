import test from 'blue-tape';
import itsSet from '../source/index';

test('value is set', (assert) => {
  assert.ok(itsSet('im set'));
  assert.ok(itsSet(false));
  assert.ok(itsSet(33));
  assert.end();
});

test('value is not set', (assert) => {
  assert.notOk(itsSet(undefined));
  assert.notOk(itsSet(null));
  assert.end();
});

test('nested value is set', (assert) => {
  assert.ok(itsSet({foo: {bar: {baz: 'im set'}}}, 'foo.bar.baz'));
  assert.end();
});

test('nested value is not set', (assert) => {
  assert.notOk(itsSet({ foo: { bar: {} } }, 'foo.bar.baz'));
  assert.notOk(itsSet({ foo: { bar: { baz: null } } }, 'foo.bar.baz'));
  assert.end();
});
