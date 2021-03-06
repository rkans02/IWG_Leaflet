let comparisonFeature = JSON.parse(JSON.stringify(statesData));
createComparisonFeature();

// function createComparisonFeature() {
//   try {
//     comparisonFeature = JSON.parse(JSON.stringify(statesData)); // Trick to copy JSON
//
//     for(let i = 0; i < comparisonFeature.features.length; i++) {
//       let nameToSeachFor = comparisonFeature.features[i].properties.name;
//       let comparisonValue = getFeatureByNameFromUSStates2(nameToSeachFor);
//       comparisonFeature.features[i].properties["bottomValue"] = comparisonValue;
//     };
//     console.log("comparisonFeature");
//     // console.log(JSON.stringify(comparisonFeature));
//   }
//   catch (error) {
//     alert(error);
//   }
// }



function getFeatureByNameFromUSStates2(name) {
  try {
    for (let i = 0; i < statesData.features.length; i++) {
      if (statesData.features[i].properties.name == name) {
        return statesData.features[i].properties.value;
      }
    }
    throw Error("Feature not found with name: " + name);

  } catch (error) {
    alert(error);
  }
};
