var coches = new Array("Honda","Mazda","Ford","Citroen","Renault ","Mercedes");

console.log(coches.includes("Honda"));
console.log(coches.find(index => index.length <5));
console.log(coches.indexOf("Citroen"));
console.log(coches.filter(index => index.length === 5));