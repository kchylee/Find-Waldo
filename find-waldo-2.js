// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(prsn){
    if (prsn === "Waldo") {
      found(arr.indexOf(prsn));   // execute callback
    };
  });
}

function actionWhenFound(idx) {
  console.log("Found Waldo at index " + idx + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);