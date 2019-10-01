const Bez = require('./main');

const BezCoin = new Bez.BlockChain();

BezCoin.addBlock({sender: "Talabi", receiver:"Sao", amount: 50000});
BezCoin.addBlock({sender: "Kelvin", receiver:"Talabi", amount: 90000});
BezCoin.addBlock({sender: "Mazi", receiver:"Perfoo", amount: 70000});

// console.log(JSON.stringify(BezCoin, null, 4));

// Test the validity 
// console.log(BezCoin.chain[0].hash);
const val1 = BezCoin.chain[0].hash;
const val2 = BezCoin.chain[0].getHash();

// console.log(val1);
// console.log(val2);
// console.log(JSON.stringify(val1) === JSON.stringify(val2));
// console.log(BezCoin.chain[0].getHash());

console.log("Validity: ", BezCoin.chainIsValid());
BezCoin.chain[0].data.receiver = "Timi";
// console.log(JSON.stringify(BezCoin, null, 4));
console.log("Validity: ", BezCoin.chainIsValid());