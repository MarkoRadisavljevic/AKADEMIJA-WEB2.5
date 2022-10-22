const ulaz = "test ulaz za hesiranje";
const broj = BigInt(`0x${Buffer.from(ulaz).toString("hex")}`);
let hasVrednost = broj;

for (let n = 0; n < 16; n++) {
  hasVrednost = hasVrednost * hasVrednost;
  hasVrednost = hasVrednost % BigInt(282943);
}

hasVrednost = hasVrednost * broj;
hasVrednost = hasVrednost % BigInt(282943);


console.log(hasVrednost);
