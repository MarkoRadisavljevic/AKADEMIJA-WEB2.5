const crypto = require("crypto");

const hash = crypto.createHash("sha256");
const ulaz = "primer....";

console.log(hash.update(ulaz).digest("hex"));
