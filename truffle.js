module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    alice: {
      host: 'localhost',
      port: 8101,
      gas: 4000000,
      network_id: '*' // Match any network id
    }
  }
}
