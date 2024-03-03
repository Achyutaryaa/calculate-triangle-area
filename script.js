let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");
let sideC = document.getElementById("sideC");
let result = document.getElementById("result");


function calculateArea() {
    let valueSideA = Number(sideA.value);
    let valueSideB = Number(sideB.value);
    let valueSideC = Number(sideC.value);
    
    if(valueSideA + valueSideB > valueSideC && valueSideB + valueSideC > valueSideA && valueSideC + valueSideA > valueSideB) {
        let sp = (valueSideA + valueSideB + valueSideC)/2;
        let sqrArea = sp * (sp - valueSideA) * (sp - valueSideB) * (sp - valueSideC);
        let actualArea = Math.sqrt(sqrArea).toFixed(2);
        result.innerHTML = "Area = " + actualArea;
    }
    else {
        result.innerHTML = 'Invalid triangle. Please enter valid side lengths.';
    }
}
