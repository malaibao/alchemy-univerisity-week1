const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "0x6a0ad23fc7d3a5a54bdd187f46961e30c33059bc": 100,
  "0xc817b3bdcafaeb4e85192bbfe9bfc0efb53d0233": 50,
  "0x6ddf240be912594a1f7e29b442d527a6a57fe2ec": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, msgHash, sigHex, recipient, amount } = req.body;
  const { address, publicKey } = sender;

  const isSigned = secp.verify(sigHex, msgHash, publicKey);
  if (!isSigned) {
    res.status(400).send({ message: "Not authenticated for this operation" });
    return;
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[address] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[address] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[address] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
