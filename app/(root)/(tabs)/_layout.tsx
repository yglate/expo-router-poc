import { IconVariant } from "@/components";
import { isIOS } from "@/constants";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

const IOSTabs = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Workspace</Label>
        <Icon src={require("@/assets/icons/workspace.png")} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="messages">
        <Label>Messages</Label>
        <Icon src={require("@/assets/icons/messages.png")} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <Label>Search</Label>
        <Icon src={require("@/assets/icons/search.png")} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon src={require("@/assets/icons/settings.png")} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

const AndroidTabs = () => {
  const renderIcon = (name: string, focused: boolean, color: string) => {
    return (
      <IconVariant
        name={focused ? `${name}-filled` : `${name}-outlined`}
        color={color}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1E1E1F",
        tabBarInactiveTintColor: "#7e7e8b",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Workspace",
          tabBarIcon: ({ color, focused }) =>
            renderIcon("workspace", focused, color),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) =>
            renderIcon("messages", focused, color),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) =>
            renderIcon("search", focused, color),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) =>
            renderIcon("settings", focused, color),
        }}
      />
    </Tabs>
  );
};

const TabLayout = () => {
  return isIOS ? <IOSTabs /> : <AndroidTabs />;
};

export default TabLayout;
