import { KeyPair, keyStores, utils, WalletConnection, connect } from "near-api-js";

export async function createWallet(nombre: string){
    //generamos un keypair para la wallet
    const keyPair = KeyPair.fromRandom("ed25519");
    const publicKey = keyPair.getPublicKey().toString();
    const privateKey = keyPair.toString();

    // Generar nombre completo de wallet en testnet
    const wallet = `${nombre}.testnet`;

    // Aquí podrías opcionalmente guardar este keyPair en un keyStore local o remoto

    return {
        wallet,
        publicKey,
        privateKey,
    };
}
