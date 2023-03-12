function calculateBMI() {
	let height = document.getElementById("height").value;
	let weight = document.getElementById("weight").value;

	if (height === "" || weight === "") {
		alert("Please enter your height and weight.");
		return;
	}

	height /= 100;
	let bmi = weight / (height * height);

	document.getElementById("bmi").value = bmi.toFixed(2);

	let interpretation = "";

	if (bmi < 18.5) {
		interpretation = "Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		interpretation = "Normal weight";
	} else if (bmi >= 25 && bmi <= 29.9) {
		interpretation = "Overweight";
	} else if (bmi >= 30 && bmi <= 34.9) {
		interpretation = "Obese (Class I)";
	} else if (bmi >= 35 && bmi <= 39.9) {
		interpretation = "Obese (Class II)";
	} else {
		interpretation = "Obese (Class III)";
	}

	document.getElementById("interpretation").value = interpretation;
}
