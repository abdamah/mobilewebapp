/**
 * Stack : it is a navigator method where screens are arranged on TOP of each other.
 * when you open a NEW screen -> its pushed onto the stack
 * when you go BACK -> the screen is popped from the stack
 * It has different PROPS
 * It has open and close tags with OPTIONAL props
 */

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
