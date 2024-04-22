import CryptoJS from 'crypto-js';


const key = 'User_KEY_SECRET';

export function decryptArg(encryptedArg: string): string {
    // Decrypt the encrypted text using AES decryption with the provided key
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedArg, key);
    const decryptedArg = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedArg;
}



function decryptString(encryptedString: string): string {
    // Decrypt the encrypted string using AES decryption
    const bytes = CryptoJS.AES.decrypt(encryptedString, key);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedString;
}