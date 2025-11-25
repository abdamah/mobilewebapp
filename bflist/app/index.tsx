import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  // create todos with useState

  const [todos, setTodos] = useState([
    { id: 1, name: "Create login button", isDone: true },
    { id: 2, name: "Design homepage UI", isDone: false },
    { id: 3, name: "Implement authentication", isDone: false },
    { id: 4, name: "Fix navigation bug", isDone: true },
    { id: 5, name: "Setup Redux store", isDone: false },
    { id: 6, name: "Add profile screen", isDone: false },
    { id: 7, name: "Integrate API for posts", isDone: true },
    { id: 8, name: "Add dark mode toggle", isDone: false },
    { id: 9, name: "Write unit tests", isDone: false },
    { id: 10, name: "Improve app performance", isDone: false },
    { id: 11, name: "Upload images to cloud", isDone: true },
    { id: 12, name: "Add push notifications", isDone: false },
    { id: 13, name: "Setup user roles", isDone: false },
    { id: 14, name: "Create settings page", isDone: true },
    { id: 15, name: "Fix layout spacing", isDone: false },
  ]);

  const myButton = () => console.log("From Button component");

  const login = (username: string, password: string) => {
    console.log(`Username:${username}, Password:${password}`);
  };

  function createButton() {
    console.log("Create your account");
  }

  // This is to toggle todos, and mark Done and Pending
  // Remember I will explain it later.
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/**Button: is a limit style that has required 'title' property
       * myButton function or handler i referenced it. REFERENCE
       *
       */}
      <Button title="My Button" color={"red"} onPress={myButton} />

      {/**Pressable: is a button component
       * it can be customized its style
       * It has many event handler like onPress, onLongPress
       *
       */}
      <Pressable
        onPress={() => login("user1", "123")}
        style={{
          backgroundColor: "red",
          padding: 20,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Press Me
        </Text>
      </Pressable>

      {/**
       * TouchableOpacity: is most used button in React Native
       * It can be customized its style
       * It has all event-handlers
       * Here I used onLongPress event
       */}
      <TouchableOpacity
        onLongPress={createButton}
        style={{
          backgroundColor: "blue",
          padding: 20,
          margin: 10,
          borderRadius: 20,
          borderColor: "#0096FF",
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Create account
        </Text>
      </TouchableOpacity>

      {/**
       * FlatList is a React Native component used to efficiently render large lists of data.
       * It only renders the items currently visible on screen, improving performance.
       *
       * Renders items lazily (only visible items).
       * Requires data (array) and renderItem (function).
       * Needs a unique key for each item (keyExtractor or id).
       * Great for long, scrollable lists.
       * Supports pull-to-refresh, infinite scroll, and horizontal lists.
       */}

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 8,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                margin: 5,
                alignItems: "center",
              }}
            >
              <Text>{item.id}.</Text>
              <Text
                style={[
                  item.isDone
                    ? { color: "#012", textDecorationLine: "line-through" }
                    : "",
                ]}
              >
                {item.name}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  padding: 2,
                }}
                onPress={() => handleToggle(item.id)}
              >
                <Text>{item.isDone ? "Done" : "Pening"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
