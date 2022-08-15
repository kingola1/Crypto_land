// https://eth-ropsten.alchemyapi.io/v2/N5PLwd3B4Ude1J_-2g8OQt4UIpzqTJKI

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/N5PLwd3B4Ude1J_-2g8OQt4UIpzqTJKI',
      accounts: [ '21ce059d97ecb136614cd461cd4f8798556a506e7ee016f74f4e4b3f52084655' ]
    }
  }
}