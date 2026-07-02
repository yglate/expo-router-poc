import { MMKV_KEYS } from "@/constants";
import { getItem } from "@/utils";
import { Redirect } from "expo-router";
import "../global.css";

export default function Index() {
  const isSignedIn: boolean = getItem<boolean>(MMKV_KEYS.IS_SIGNED_IN) || false;

  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  return <Redirect href="/sign-in" />;
}
