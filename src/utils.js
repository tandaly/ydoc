const fs = require('fs')
const logger = require('./logger');

/**
 * 复制一个对象的属性到另一个对象
 *
 * @param {any} obj
 * @param {any} props
 * @returns
 */
exports.extend = function extend(obj, props) {
  for (let i in props) {
    if (props.hasOwnProperty(i)) {
      obj[i] = props[i];
    }
  }
  return obj;
}


exports.clearArray = function clearArray(a) {
  return a.splice(0, a.length);
}

exports.fileExist = (filePath) => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

/**
 * log 输出，一共四个 api:
 *  log.debug(msg)
 *  log.info(msg)
 *  log.warn(msg)
 *  log.error(msg)
 */
exports.log = new logger('info');

function hashEncode(text){
  return text.replace(/[\~\:\#\@\/\(\)]/g, '').replace(/\s+/g, '-');
}

exports.hashEncode = hashEncode