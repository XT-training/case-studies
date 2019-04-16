const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKEY  = fs.readFileSync(__dirname + '/../config/private.key', 'utf8');
const publicKEY  = fs.readFileSync(__dirname + '/../config/public.key', 'utf8');

const defaultSign = {
  expiresIn: '30d',
  algorithm: 'RS256'
};

const defaultVerify = {
  expiresIn: '30d',
  algorithm: ['RS256']
}

export const sign = (payload, options = {}) => {
  const signOptions = Object.assign({}, defaultSign, options);

  return jwt.sign(payload, privateKEY, signOptions);
}

export const verify = (token, options = {}) => {
  const verifyOptions = Object.assign({}, defaultVerify, options);

  try{
    return jwt.verify(token, publicKEY, verifyOptions);
  } catch (e) {
    console.log('error while verifying token', e);
    return false;
  }
}

export const decode = token => {
  return jwt.decode(token, { complete: true });
}
