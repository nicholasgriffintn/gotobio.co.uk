import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    id: 1,
    email: 'me@nicholasgriffin.co.uk',
    salt: '4fc9284a9a735daa64f38e695f5d678e',
    hash: '0355497799b2d15f0e4ddc28e5c1165c3f97d83286c4412399e6d95bbf2f022d9df6dd453e30a508627c7251a0eb7f2674439a8af5d8128402efb4992c8ef031',
  },
];

export async function createUser({ email, password }) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    email,
    hash,
    salt,
  };

  users.push(user);

  return user;
}

export async function findUser({ email }) {
  return users.find(user => user.email === email);
}

export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
