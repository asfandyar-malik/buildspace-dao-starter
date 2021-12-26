# r/Soccer DAO to buy a Soccer Team and promote it to Premier League

This is a DAO through which 3.1 million subscribers of r/soccer get to buy a team together, decide unanimously on every transfer decision, club direction and get the team promoted. The rules of governance are determined on a smart contract, so everything is completely transparent.   

The goal is to take a team from 2nd, 3rd division and promote it to English Premier League.   

### ** Welcome Legends! 👋**
Run this application using the following:  

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project


Steps 


1. `node scripts/1-initialize-sdk.js`

Initialized App on Thirdweb: 
App address is: 0x566783b14842acA3E1140359a646fEEDE4889922

2. `node scripts/2-deploy-drop.js`

Bundle drop contracts address: 
0x4F2c5B885D2CE654e84705AE71dFb64aC1608c1e


3. `node scripts/3-config-nft.js`
Configure your NFT by adding name, description to it

4. `node scripts/4-set-claim-condition.js`
Create settings on how an NFT can be claimed. startTime, maxQuantity is the max # of membership NFTs that can be minted

Your app address is: 0x566783b14842acA3E1140359a646fEEDE4889922
✅ Sucessfully set claim condition on bundle drop: 0x4F2c5B885D2CE654e84705AE71dFb64aC1608c1e

Our bundle drop interaction with the contract can be seen here: https://rinkeby.etherscan.io/address/0x4F2c5B885D2CE654e84705AE71dFb64aC1608c1e 

😲 Let users mint your NFTs.

NFT has been minted here and can be viewed: 
https://testnets.opensea.io/assets/0x4F2c5B885D2CE654e84705AE71dFb64aC1608c1e/0


5. `node scripts/5-deploy-token.js`

We deploy a standard ERC-20 token contract which is the standard for all the massive coins on Ethereum adopt. Our Token symbol is BALLONDOR ... hahaha you can get more Ballon d'or than Ronaldo and Messi ;) 

You can see the token module here: https://rinkeby.etherscan.io/address/0x4377b0EE22245A77b798A59121501d13BE80Ec85

Import the token in your metamask wallet: 

![image](https://user-images.githubusercontent.com/4105873/147420816-a97c12fe-be09-4c5f-abc2-cce5b2854313.png)

We officially have our own token !! 


6. 💸 Create your token’s supply.

`node scripts/6-print-money.js`

I set it up to 1 million here :)  

![image](https://user-images.githubusercontent.com/4105873/147420879-116b1199-19df-4024-a5d6-d244a353a780.png)

Check the Coin Tracker here: https://rinkeby.etherscan.io/token/0x4377b0EE22245A77b798A59121501d13BE80Ec85



7. Now we airdrop the token 

`node scripts/7-airdrop-token.js`

![image](https://user-images.githubusercontent.com/4105873/147420986-c517ba20-6650-4512-99f6-d04961855517.png)

Here you can visualize the holders of my token: 
https://rinkeby.etherscan.io/token/0x4377b0EE22245A77b798A59121501d13BE80Ec85#balances

On our website we show the list of all token owners: 

![image](https://user-images.githubusercontent.com/4105873/147421368-dac6d768-c922-4e04-9943-a5944dfa09ca.png)










