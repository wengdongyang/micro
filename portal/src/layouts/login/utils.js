import CryptoJS from 'crypto-js';
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
export const encrypt = word => {
  try {
    const key = CryptoJS.enc.Utf8.parse('sP9*lD4#oQ2)rA9/');
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
  } catch (error) {
    console.warn(error);
    return '';
  }
};
