const celsiusInputs = document.getElementById("celsius");
const btn = document.getElementById("btn");
const result = document.getElementById("calc");

btn.addEventListener("click", function () {
  return (result.innerHTML = (celsiusInputs.value * 9) / 5 + 32);
});
