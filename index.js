// jshint esversion:6

// require the packages after using NPM to install
const superheroes = require('superheroes');
const supervillains = require('supervillains');

// find usable functions from the package documentation
var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

// test the package
console.log("My Superhero name is " + mySuperheroName + ", but my Supervillain name is " + mySupervillainName + ".");
