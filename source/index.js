import get from 'lodash.get';

export default function (val) {
  const checkVal = (v) => typeof v !== 'undefined' && v !== null;
  if (!checkVal(val)) return false;
  if (val.constructor === Array) {
    return val.every((v) => checkVal(v));
  } else if (arguments.length === 2) {
    return checkVal(get(arguments[0], arguments[1]));
  }
  return true;
}
