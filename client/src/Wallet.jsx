import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import { keccak256 } from "ethereum-cryptography/keccak";
import { toHex } from "ethereum-cryptography/utils";

const getPublicKey = (privateKey) => {
  return secp.getPublicKey(privateKey);
};

const getAddress = (publicKey) => {
  const hashed = keccak256(publicKey.slice(1));
  const address = toHex(hashed.slice(hashed.length - 20, hashed.length));
  return `${ADDRESS_PREFIX}${address}`;
};

const ADDRESS_PREFIX = "0x";

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  const onChange = async (evt) => {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);

    const publicKey = getPublicKey(privateKey);
    const address = getAddress(publicKey);

    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  };

  return (
    <div className='container wallet'>
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input
          placeholder='Private key'
          value={privateKey}
          onChange={onChange}
        ></input>
      </label>

      <label>
        Your wallet address: <span>{address}</span>
      </label>

      <div className='balance'>Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
