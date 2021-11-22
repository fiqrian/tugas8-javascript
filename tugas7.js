var x = [176, 169, 190, 178, 166, 189, 176, 164, 165, 181];
for (i = 0; i < x.length; i++) {
  console.log(x);
}
//analisis for menggunakan increment dan statement yang begitu kompleks sehingga penulisan lebih panjang dari pada for of

console.log("/////////////");

for (i of x) {
  console.log(x);
}

// analis for of tidak menggunakan increment dan statement yang begitu kompleks, menggunakan for of penulisan lebih simple
