"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var FoodObj = function FoodObj(name, macros) {
  var food = {};
  food.name = name;
  food.macros = macros;

  return food;
};

exports.default = FoodObj;