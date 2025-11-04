/**
 * In react native app there two files/modules
 *  1. _layout.tsx: which is responsible for rendering layout content. Here we are using Typescript
 *  2. index.tsx: which is used to rendere 'home/index'
 */

import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Simple Arrow function component
const HomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={qurxin.con}>
      {/**qurxin: is Style Sheet object */}
      {/**View: is used to create a container as div in blain HTML */}
      <Text style={qurxin.txt}>Hello World</Text>{" "}
      {/** Text is a component used to display any 'string' text on UI */}
      {/** Here count is state variable used to render its value in {} */}
      <Text style={qurxin.txt}>{count}</Text>
      {/** {}: are used to render dynamic content on JSX or TSX */}
      <Button onPress={() => setCount(count + 1)} title="Increment" />
      <Button onPress={() => setCount(count - 1)} title="Decrement" />
    </View>
  );
};

//This is Sytle Sheet object creation for for separation purpose
const qurxin = StyleSheet.create({
  //first object
  con: {
    // These are properties
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bc2",
  },
  //second object
  txt: {
    //Properties
    color: "#fff",
    fontSize: 30,
  },
});
export default HomePage;
