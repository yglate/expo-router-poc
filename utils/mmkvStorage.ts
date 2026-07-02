import { createMMKV } from "react-native-mmkv";

export const storage = createMMKV({ id: "expo-router-poc-storage" });

/**
 * Retrieves an item from storage and parses it as JSON.
 * @param key The key of the item to retrieve.
 * @returns The parsed item or null if not found.
 */
export const getItem = <T>(key: string): T | null => {
  const value = storage.getString(key);
  if (!value) return null;

  const parsedVal = JSON.parse(value);
  return parsedVal;
};

/**
 * Sets an item in storage as a JSON string.
 * @param key The key of the item to set.
 * @param value The value to set.
 */
export const setItem = <T>(key: string, value: T): void => {
  storage.set(key, JSON.stringify(value));
};

/**
 * Removes an item from storage.
 * @param key The key of the item to remove.
 */
export const removeItem = (key: string): void => {
  storage.remove(key);
};

/**
 * Clears all items from storage.
 */
export const clearAll = (): void => {
  return storage.clearAll();
};
