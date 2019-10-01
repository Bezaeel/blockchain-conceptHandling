const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, previousHash, data){
        this.index = index;
        this.timestamp = Math.floor(Date.now()/1000);
        this.previousHash = previousHash;
        this.data = data;
        this.hash = this.getHash();
    }

    getHash(){
        return SHA256(JSON.stringify(this.data) + this.previousHash + this.index + this.timestamp);
    }
}

class BlockChain{
    constructor(){
        this.chain = [];
    }

    addBlock(data){
        // get tail end of chain array
        let index = this.chain.length;
        
        let previousHash = this.chain.length !== 0 ? this.chain[this.chain.length-1] : 0;
        let block = new Block(index, previousHash, data);
        this.chain.push(block);
    }

    chainIsValid(){
        for(var i=0;i<this.chain.length;i++){
            if(JSON.stringify(this.chain[i].hash) !== JSON.stringify(this.chain[i].getHash())){
                return false;
            }

            if(i>0 && JSON.stringify(this.chain[i].previousHash) !== JSON.stringify(this.chain[i-1].hash)){
                return false;
            }

            return true;
        }
    }
}

module.exports = {
    BlockChain : BlockChain,
    Block : Block
}