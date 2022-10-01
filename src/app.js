/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let allCombos = genAllCombos(
    genAllCombos(genAllCombos(opts[0], opts[1]), opts[2]),
    opts[3]
  );

  for (let combo of allCombos) console.log(combo);
};

let pronouns = ["the", "our"];
let adjs = ["great", "big"];
let nouns = ["jogger", "racoon"];
let exts = [".com", ".us", ".net", ".io"];

const opts = [pronouns, adjs, nouns, exts];

function genAllCombos(arr1, arr2) {
  let combos = [];

  for (let x of arr1) {
    combos = [...combos, ...arr2.map(y => `${x}${y}`)];
  }

  return combos;
}
