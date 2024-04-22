import CryptoJS from 'crypto-js';

const key = 'User_KEY_SECRET';


// Function to encrypt the argument using AES encryption
export function encryptArg(arg: string): string {
    // Encrypt the argument using AES encryption with the provided key
    const encryptedArg = CryptoJS.AES.encrypt(arg, key).toString();
    return encryptedArg;
}

export function encryptObject(obj: any): string {
    // Serialize the object into a JSON string
    const jsonString = JSON.stringify(obj);
    // Encrypt the JSON string using AES encryption
    const encryptedString = CryptoJS.AES.encrypt(jsonString, key).toString();
    return encryptedString;
}

