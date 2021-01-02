require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note pave purpose half enrich only slam'; 
let testAccounts = [
"0x4b070a58a1b3b019df38733061219dfe842c67117c09b9879fe008e177b2a3fa",
"0x6a21536f7b6324bad261b53c4c438f38e8ac6ea0bc26e52da91cba0f066e2c7f",
"0xea646085309be0f05beea15560abbeeedbeeb3d78ddf41df5f34c1e25d40e3b9",
"0xd6365ca48d8a7b533c4f7c2d8bc34f9f1d26e142678484ae4d904d660a3ef2ef",
"0x2873a8956b614c0abfd322cf8f115531df88b3f707ff1d5c62346923157ff271",
"0x8495bad5ec7c492ea887c1d0839b4ba6dda8a9613d3564241d1d98003c623489",
"0xcbb2ba966f32eccace453cf3990b147440c8ae96419a10f1f380c611ad48b9f1",
"0x159f0544467e15c3a5493ece4090a79a5617bc1dd0f94fa0e3528c838d4ec872",
"0x789e25f74dc7abd87c28eabbdc542ee977272540af25c2b7363867841566c503",
"0x3d3b3458f46da1b587c03e2759c5b6b2751336b25e920772a8156d407d6c6b1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
