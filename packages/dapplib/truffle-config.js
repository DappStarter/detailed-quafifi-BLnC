require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind concert gesture crew flower spoil'; 
let testAccounts = [
"0x3202da89549ff44f06198d0ff1901776ae78aefab4b0ee82ba95a945243682a0",
"0x7a92aab816883e81204e6cca0b074a832632618b8796c8c94c5457a62522f391",
"0x29fc78543180fa72f2322edf12e95fd5ef9cf06d50d249a7e61dcca36a0f37dd",
"0x8f7d0671a7548a5b1d0e6347b11ddd86655d115c00ec3c4ad146723c32796947",
"0xbb75a47d70080fa873990551459c7bbe9acb006e12cd1db5d09e02a74fb7b911",
"0x744913df98a810ac9c795d5eb69e1cb75b0cfaac73bd376612941db1cc5a706d",
"0x48ab80e8cf20be92bb8870b827fe1191c7cdee9b13205a0f96b8e2abf0bcdc31",
"0xe605eb676df31486d5c7fe985ad64f79b5a466a0da2ad9e1c61f361315af9d27",
"0x1a9e88c61687c375e9057685030eb64808bc8ec50f3920f969853c16104c3255",
"0xc049bdd4cee48a3f8f246e1dd1c39fd213060193b9c819b5aaef65501c443314"
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
            version: '^0.8.0'
        }
    }
};

