const celsiusInputs = document.getElementById("celsius");
const fahrenheitInputs = document.getElementById("fahrenheit");
const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celsius":
        fahrenheitInputs.value = ((value - 32) * 5) / 9;
        break;
      case "fahrenheit":
        celsiusInputs.value = value * 1.8 + 32;
        break;
    }
  });
}
