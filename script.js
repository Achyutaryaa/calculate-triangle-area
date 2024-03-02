let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");
let sideC = document.getElementById("sideC");
let result = document.getElementById("result");

function calculateArea() {
    let valueA = Number(sideA.value);
    let valueB = Number(sideB.value);
    let valueC = Number(sideC.value);
    let sp = (valueA + valueB + valueC)/2;
    let sqrResult = sp*(sp - valueA)*(sp - valueB)*(sp - valueC);
    let area = Math.sqrt(sqrResult);
    result.innerHTML = "Area = " + area.toFixed(2);
}