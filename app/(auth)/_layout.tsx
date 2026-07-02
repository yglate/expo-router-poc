import { MMKV_KEYS } from "@/constants";
import { getItem } from "@/utils";
import { Redirect, Stack } from "expo-router";

export default function AuthRoutesLayout() {
  const isSignedIn: boolean = getItem<boolean>(MMKV_KEYS.IS_SIGNED_IN) || false;

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
