import { Redirect, Stack } from "expo-router";

export default function AuthRoutesLayout() {
  const isSignedIn = true; // Replace with actual authentication logic

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
