import React from "react";
import { Text, View } from "react-native";
import LotsOfStyles from "./components/styles/styless";
import FixedDimensionsBasics from "./components/heightWidth/FixedDimensions";
import FlexDimensionsBasics from "./components/heightWidth/FlexDimensions";
import PercentageDimensionsBasics from "./components/heightWidth/PercentageDimensions";

function App() {
  return (
    <View>
      <Text>
        <LotsOfStyles/>
        <FixedDimensionsBasics/>
        <FlexDimensionsBasics/>
        <PercentageDimensionsBasics/>
      </Text>
    </View>
  )
}

export default App;