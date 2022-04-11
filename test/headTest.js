//import head.js & assertEqual.js
const head = require('../head');
const assertEqual = require('../assertEqual');

//test scenarios
assertEqual(head([5, 6, 7]), 5); //assertion passed
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //assertion passed
assertEqual(head([10]), 10); //assertion passed
assertEqual(head([]), undefined); //assertion passed
assertEqual(head([5, 6, 7]), undefined); //assetion failed