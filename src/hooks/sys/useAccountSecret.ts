import { AES, enc, mode, pad } from 'crypto-js';

const useAccountSecret = () => {
  const encrypt = (password) => {
    const a = AES.encrypt(password, enc.Utf8.parse('tisishcsplogin69'), {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    const hexStr = a.ciphertext.toString().toUpperCase();
    const oldHexStr = enc.Hex.parse(hexStr);
    const base64Str = enc.Base64.stringify(oldHexStr);
    return base64Str;
  };

  const decrypt = (code) => {
    const password = AES.decrypt(code, enc.Utf8.parse('tisishcsplogin69'), {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    })
      .toString(enc.Utf8)
      .toString();
    return password;
  };

  return {
    encrypt,
    decrypt,
  };
};

export default useAccountSecret;
