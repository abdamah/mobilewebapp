import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface TodoType {
  id: number;
  name: string;
  isDone: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      name: "Create button",
      isDone: false,
    },
    {
      id: 2,
      name: "Add functionality",
      isDone: true,
    },
  ]);

  function handleMark(id: number) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        margin: 10,
        marginLeft: 20,
      }}
    >
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              backgroundColor: "#fff",
              marginBottom: 16,
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                item.isDone
                  ? {
                      color: "red",
                    }
                  : "",
                {
                  fontSize: 25,
                },
              ]}
            >
              {item.name}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "blue",
                padding: 10,
                borderRadius: 10,
              }}
              onPress={() => handleMark(item.id)}
            >
              <Text
                style={{
                  fontSize: 50,
                  color: "white",
                }}
              >
                Mark
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Index;
