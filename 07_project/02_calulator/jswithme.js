const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const analysis = document.querySelector("#analysis");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${results}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //result
    results.innerHTML = `<span>${bmi}</span>`;
  //weight guide
  if (bmi < 18.6) {
    analysis.innerHTML = `<span>"Under Weight"</span>`;
  } else if (bmi > 18.6 && bmi < 24.9) {
    analysis.innerHTML = `<span>"Normal Range"</span>`;
  } else {
    analysis.innerHTML = `<span>"OverWeight"</span>`;
  }
}
});
