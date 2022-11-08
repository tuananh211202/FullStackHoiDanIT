import bcrypt from "bcryptjs";
import db from "../models";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise( async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        ...data,
        password: hashPasswordFromBcrypt,
        gender: data.gender == '1' ? true : false,
      });
      resolve('create new user success');
    } catch(e){
      reject(e);
    }
  })
}

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try{
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch(e){
      reject(e);
    }
  })
}

module.exports = {
  createNewUser: createNewUser,
}
