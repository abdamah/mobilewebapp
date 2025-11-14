{
  /**
    * Route Group: It is way that we remove folder name from URL route. It is simple to add parenthesis to the folder like (auth). This is not added to path
    * Here route will: /login because auth folder is surrounded by ().

     */
}

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Link href={"/"}>
        <Text>Back to home</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "blue",
  },
});

export default Login;
