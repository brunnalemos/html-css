let selectedIdols = JSON.parse(sessionStorage.getItem('selectedIdols'));
let resultsDiv = document.getElementById("results");
let idolsNames = Array.from(selectedIdols.map(el => el.bias)).concat(selectedIdols.map(el => el.biaswrecker)).filter(n => n);
let everySelectedBias = idolsNames.reduce(
    ( acumulador, valorAtual ) => acumulador.concat(valorAtual),[]
  );
let uniqueArray = [...new Set(everySelectedBias)];
let selectedBias = uniqueArray;
resultsDiv.textContent = selectedBias.join(", ");