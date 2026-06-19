import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  const isSignedIn = true; // Replace with actual authentication logic

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
