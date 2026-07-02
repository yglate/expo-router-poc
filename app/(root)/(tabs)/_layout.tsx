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
            <IconVariant
              name={focused ? "search-filled" : "search-outlined"}
              color={color}
            />
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
              color={color}
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
