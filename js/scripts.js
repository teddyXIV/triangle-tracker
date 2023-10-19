//Business Logic
function isTriangle(num1, num2, num3) {
    return ((num1 + num2 <= num3) || (num1 + num3 <= num2) || (num2 + num3 <= num1));

}

function equilateral(num1, num2, num3) {
    return (num1 === num2 === num3);
}

function isosceles(num1, num2, num3) {
    return ((num1 === num2 !== num3) || (num1 === num3 !== num2) || (num2 === num3 !== num1));
}

function scalene(num1, num2, num3) {
    return num1 != num2 != num3;
}

window.addEventListener("load", function () {
    const form = document.getElementById("triangleTracker");
    form.addEventListener("submit", handleCalculation);
});

function handleCalculation(event) {
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#input1").value);
    const side2 = parseInt(document.querySelector("input#input2").value);
    const side3 = parseInt(document.querySelector("input#input3").value);
    let result;

    if (equilateral(side1, side2, side3)) {
        result = "Equilateral Triangle";
    } else if (isTriangle(side1, side2, side3)) {
        result = "Not a triangle";
    } else if (isosceles(side1, side2, side3)) {
        result = "Isosceles Triangle";
    } else if (scalene(side1, side2, side3)) {
        result = "Scalene Triangle";
    }

    document.getElementById("result").innerText = result;
}
