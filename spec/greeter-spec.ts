import * as test from 'tape';
import { Greeter } from '../src/greeter';

test('A passing test', (assert: test.Test) => {
  assert.pass('This test will pass.');
  assert.end();
});

test('A second passing test', (assert: test.Test) => {
  assert.plan(2);
  var greeter = new Greeter('friend');
  assert.equal(greeter.greet(), 'Bonjour, friend!', 'Saying bonjour');
  assert.equal(greeter.adios(), 'Adios', 'Saying adios');
  assert.end();
});
