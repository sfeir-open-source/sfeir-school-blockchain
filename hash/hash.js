const { createHash } = require('crypto');

const generateHashWithNonce = (str, nonce) => {
  const shaHash = createHash('sha256');
  const input = `${str}${nonce}`;
  shaHash.update(input);
  const digest = shaHash.digest();
  return { nonce, hash: digest.toString('hex') };
};


const start = performance.now()
let i = 0;
let result = generateHashWithNonce('polytech', i);

while (!result.hash.startsWith('000000')) {
  result = generateHashWithNonce('polytech', i++);
}

console.log(performance.now() - start, result);
