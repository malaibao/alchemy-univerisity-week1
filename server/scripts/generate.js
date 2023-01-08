const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const generatePrivateKey = () => {
  const publicKey = secp.utils.randomPrivateKey();
  return toHex(publicKey);
};

const getPublicKey = (privateKey) => {
  return secp.getPublicKey(privateKey);
};

const getAddress = (publicKey) => {
  const hashed = keccak256(publicKey.slice(1));
  return toHex(hashed.slice(hashed.length - 20, hashed.length));
};

module.exports = { generatePrivateKey, getPublicKey, getAddress };
