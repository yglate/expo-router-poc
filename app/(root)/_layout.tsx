import { MMKV_KEYS } from "@/constants";
import { getItem } from "@/utils";
import { Redirect, Slot } from "expo-router";

export default function RootLayout() {
  const isSignedIn: boolean = getItem<boolean>(MMKV_KEYS.IS_SIGNED_IN) || false;

  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
