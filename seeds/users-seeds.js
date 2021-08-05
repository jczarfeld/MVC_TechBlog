const { User } = require("../models");

const userData = [
  {
    username: "Math Damon",
    email: "applepi@mail.com",
    password: "password",
  },
  {
    username: "Julius Irving",
    email: "skateordie22@mail.com",
    password: "password",
  },
  {
    username: "Mother Teresa",
    email: "sauronic665@mail.com",
    password: "password",
  },
  {
    username: "Bassley Proughshawp",
    email: "reelgudcatdad@mail.com",
    password: "password",
  },
  {
    username: "Nachos1776",
    email: "leia@mail.com",
    password: "password",
  }
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;