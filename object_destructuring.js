//object destructuring
const band={
    bandName: "led zeppling",
    famousSong: "kuve pani bharava gaythi",
    year: 1996,
    anotherFamousSong: "kashmir"
};
let {bandName, famousSong,...restprops}=band;
console.log(bandName);
console.log(restprops);