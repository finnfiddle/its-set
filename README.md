# Its Set

Deep check if an identifier is defined and not null

```
npm install its-set
```

## Examples

```javascript
import { expect } from 'chai';
import itsSet from 'its-set';

expect(itsSet('im set')).to.be.true;
expect(itsSet(false)).to.be.true;
expect(itsSet(33)).to.be.true;

expect(itsSet(undefined)).to.be.false;
expect(itsSet(null)).to.be.false;

expect(itsSet({ foo: { bar: { baz: 'im set' } } }, 'foo.bar.baz')).to.be.true;

expect(itsSet({ foo: { bar: {} } }, 'foo.bar.baz')).to.be.false;
expect(itsSet({ foo: { bar: { baz: null } } }, 'foo.bar.baz')).to.be.false;
```
