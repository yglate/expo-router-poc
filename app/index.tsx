import { Redirect } from "expo-router";

export default function Index() {
  const isSignedIn = true; // Replace with actual authentication logic

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  return <Redirect href="/sign-in" />;
}
