const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jzzmbybrrlfzvf",
  password: "eb31bfd4a0b6b53a56f7b480ccf28b4aa4fda39475fe1765df64e03c33f5bc8d",
  host: "ec2-176-34-211-0.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "deqj5mqahdj49p"
});

module.exports = pool;