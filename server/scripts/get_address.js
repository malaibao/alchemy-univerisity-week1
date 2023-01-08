const secp = require("ethereum-cryptography/secp256k1");
const { generatePrivateKey, getPublicKey, getAddress } = require("./generate");

const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);
const address = getAddress(publicKey);

console.log("privateKey", privateKey);
console.log("publicKey", publicKey);
console.log("address", address);

/*
privateKey 393847eef12f120a1c93046e33ed1e3297d0f850abea8a48c20d9c9e80c2bec3
publicKey Uint8Array(65) [
    4, 210, 167, 112, 253, 242,  93, 198, 191, 254, 174,
  244,  77, 240, 146, 117, 101, 223,  13, 139,  62,  75,
  226, 171, 189,  24,   7, 140, 161,   1, 111,  47,  40,
  215, 140, 212, 229, 239, 210, 251,  50, 224, 159, 194,
  138, 122,  69, 254, 138, 145, 166, 222,  75, 230,  69,
  218, 225, 132, 237,  51,  64, 240,  60, 142, 212
]
address 6a0ad23fc7d3a5a54bdd187f46961e30c33059bc

---

privateKey b7999e26dc50f9fefedaf034285cb6da4d83824d5902d9ca48b73c01ecde8360
publicKey Uint8Array(65) [
    4,  44, 246, 238,  47,  25, 254, 233,  89, 108,  33,
   45,  59, 134, 226, 176, 116, 208,  81, 100,  30,  57,
  149,  65,  10, 151,  37,   0, 142,  17,   0,  66, 144,
   90,  83, 111, 170, 155, 219, 109, 161,  88, 110,  58,
   27, 219,   3, 203,  21, 235, 232, 164, 136, 217, 117,
   55, 110, 104, 119,  76, 255,  28, 121, 128,  39
]
address c817b3bdcafaeb4e85192bbfe9bfc0efb53d0233

---

privateKey 1b58187695f904b91e4cda8b259474fe30715da0afa8b84f9b98d36d7bbb6bd8
publicKey Uint8Array(65) [
    4, 194, 233,  25, 198, 225, 142, 204,  25,  24, 130,
   64, 204, 184, 155, 118,  84, 113, 113, 216, 145,  79,
  182,  97, 168,  40, 165, 215,  71, 182, 229, 182, 248,
  218, 188,  49,  43,  62,  70, 105, 169,  92,  84, 111,
  208, 134, 130, 233, 150,  94, 146,   8, 163,  33, 142,
    3,  26,  84, 166, 218,  11, 170, 109,  48,  77
]
address 6ddf240be912594a1f7e29b442d527a6a57fe2ec
*/
