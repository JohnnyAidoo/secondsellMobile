import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Tabs } from "expo-router";
import { Dimensions, Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";
import { Avatar, FAB, IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const WIDTH = Dimensions.get("screen").width;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        <Tabs.Screen
          name="(index)"
          options={{
            title: "",

            headerShown: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,

            headerLeft: () => (
              <Pressable>
                <MaterialIcons
                  name="align-horizontal-left"
                  size={25}
                  style={{ paddingHorizontal: 10 }}
                />
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: "Tab Two",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="shoppingcart" color={color} />
            ),
          }}
        />
      </Tabs>

      <FAB
        icon="bookmark-outline"
        style={{
          position: "absolute",
          bottom: 30,
          zIndex: 3,
          alignSelf: "center",
          borderRadius: 50,
          backgroundColor: Colors.light.tint,
        }}
        color="white"
        size="medium"
      />
    </>
  );
}
