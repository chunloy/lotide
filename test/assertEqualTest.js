const assertEqual = require('../assertEqual');

//Testing other scenarios
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs"); //Assertion passed
assertEqual("LighthousE Labs", "Lighthouse Labs"); //Assertion failed
assertEqual(2, 2); //Assertion passed
assertEqual(2, 2.0); //Assertion passed
assertEqual(2, 3); //Assertion failed