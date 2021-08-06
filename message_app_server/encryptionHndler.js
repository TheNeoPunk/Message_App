const crypto = require("crypto");
const secret = 'pppppppppppppppppppppppppppppppp';

//Encrypt incoming password
const encrypt = (password) => {

    //Encryption is 16 bytes
    const iv = Buffer.from(crypto.randomBytes(16));
    
    //Configure encryption algorithm
    const cipher = crypto.createCipheriv(
        'aes-256-ctr', 
        Buffer.from(secret), 
        iv 
    );

    //Create encrypted password with concatination
    const encryptedPassword = Buffer.concat([
        cipher.update(password), 
        cipher.final()
    ]);

    //Return the encrypted Password
    return {
        iv: iv.toString('hex'), 
        password: encryptedPassword.toString("hex")
    };

}

//Decrypts incoming password
const decrypt = (encryptedPass, iv) => {

    //Assign decipher method as obj
    const decipher = crypto.createDecipheriv( 
        'aes-256-ctr', 
        Buffer.from(secret), 
        Buffer.from(iv, "hex")
    );

    //Assign decrypted password to variable
    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryptedPass, 'hex')), 
        decipher.final()
    ]);

    //Return deciphered value
    return decryptedPassword.toString();

}

//Export arrow functions to server
module.exports = {encrypt, decrypt};