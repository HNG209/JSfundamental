//JS fundamental 1
function calculateBMI(mass, height){
    return mass / height ** 2;
}

var markWeight = 78; markHeight = 1.69; markBMI = calculateBMI(markWeight, markHeight)
var johnWeight = 92; johnHeight = 1.95; johnBMI = calculateBMI(johnWeight, johnHeight)


var markHigherBMI = markBMI > johnBMI;

console.log("challenge 1")
console.log(markHigherBMI)

console.log("challenge 2")

if(markHigherBMI)
    console.log("Mark's BMI(", markBMI ,")is higher than John's(", johnBMI, ")!")
else console.log("John's BMI(", johnBMI ,")is higher than Mark's(", markBMI, ")!")

console.log("challenge 3")
var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

function calculateAvg(scores){
    var sum = 0; count = 1;
    scores.forEach(element => {
        sum += element;
        count++;
    });
    return sum / count;
}

var dolphinsAvg = calculateAvg(dolphins);
var koalasAvg = calculateAvg(koalas);

console.log("Dolphins's average:", dolphinsAvg);
console.log("Koalas's average:", koalasAvg);

if(dolphinsAvg > koalasAvg)
    console.log("Dolphins win!");
else if(dolphinsAvg < koalasAvg)
    console.log("Koalas win!");
else console.log("draw!");

console.log("challenge 4")

var billValue = 275;
var tip = (billValue >= 50 && billValue <= 300) ? billValue * 15 / 100 : billValue * 20 / 100;
var total = billValue + tip;

console.log("bill value:", billValue);
console.log("tip:", tip);
console.log("total:", total);
