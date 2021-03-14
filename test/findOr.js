import { assert } from 'chai';

import * as RA from '../src';

describe('findOr', function () {
  context('given a list with a matching value', function () {
    context('and that value is truthy', function () {
      specify('should return the found value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3];
        const predicate = (val) => val === 1;

        assert.deepEqual(RA.findOr(defaultValue, predicate, list), 1);
      });
    });

    context('and that value is NaN', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, NaN];
        const predicate = (val) => RA.isNaN(val);

        assert.deepEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });

    context('and that value is null', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, null];
        const predicate = (val) => val === null;

        assert.deepEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });

    context('and that value is undefined', function () {
      specify('should return the default value', function () {
        const defaultValue = 'default';
        const list = [1, 2, 3, null];
        const predicate = (val) => val === undefined;

        assert.deepEqual(
          RA.findOr(defaultValue, predicate, list),
          defaultValue
        );
      });
    });
  });

  context('given a list that does not contain the value to find', function () {
    specify('should return the default value', function () {
      const defaultValue = 'default';
      const list = [1, 2, 3];
      const predicate = (val) => val === 4;

      assert.deepEqual(RA.findOr(defaultValue, predicate, list), defaultValue);
    });
  });
});
