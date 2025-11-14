/**
 * Route: it is a navigation from one screen to another screen
 * React native is file-based routing style
 * each and every folder under app is consider a route
 * for instance
 * about: there a file named about.tsx
 * so route: /-> for root
 *          /about/about
 *
 * index.tsx: If we create file named index.tsx under any folder then we can remove file name from route
 * for example
 * supose we create contact folder with in we add index.tsx, then route will be /contact only. no need to add index
 */
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen </Text>
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

export default About;
