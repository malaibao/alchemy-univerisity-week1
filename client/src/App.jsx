import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className='app'>
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
      />
      <Transfer
        privateKey={privateKey}
        address={address}
        setBalance={setBalance}
      />
    </div>
  );
}

export default App;
