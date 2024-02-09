function binaryToString(binaryBlob) {

  let bits = [];

  for (let i = 0; i < binaryBlob.length; i+= 8) {
    bits.push(binaryBlob.slice(i, i + 8));
  }

  for (let i = 0; i < bits.length; i++) {
    bits[i] = String.fromCharCode(parseInt(bits[i], 2));
  }






  return bits.join("");
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
