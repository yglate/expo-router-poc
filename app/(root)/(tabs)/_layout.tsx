import { IconVariant } from "@/components";
import { isIOS } from "@/constants";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

const IOSTabs = () => {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Workspace</Label>
        <Icon sf="house" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="messages">
        <Label>Messages</Label>
        <Icon sf="message" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search">
        <Label>Search</Label>
        <Icon sf="magnifyingglass" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf="gear" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

const AndroidTabs = () => {
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
          tabBarIcon: ({ color, focused }) => (
            <IconVariant
              name={focused ? "workspace-filled" : "workspace-outlined"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <IconVariant
              name={focused ? "messages-filled" : "messages-outlined"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <IconVariant name={focused ? "search-filled" : "search-outlined"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <IconVariant
              name={focused ? "settings-filled" : "settings-outlined"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const TabLayout = () => {
  return isIOS ? <IOSTabs /> : <AndroidTabs />;
};

export default TabLayout;
