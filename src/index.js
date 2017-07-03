import _ from 'lodash';

export function itsSet (val) {
  const checkVal = (v) => typeof v !== 'undefined' && v !== null;
  if (!checkVal(val)) return false;
  if (val.constructor === Array) {
    return val.every((v) => checkVal(v));
  } else if (arguments.length === 2) {
    return checkVal(_.get(arguments[0], arguments[1]));
  }
  return true;
}

export default itsSet;
