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
          name="index"
          options={{
            title: "",
            headerStyle: { backgroundColor: Colors.light.background },
            headerShadowVisible: false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "auto",
                  gap: 10,
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor: "transparent",
                }}
              >
                <Pressable onPress={() => {}}>
                  <TabBarIcon name="search1" color="black" />
                </Pressable>
                <Pressable onPress={() => {}}>
                  <Avatar.Text label="Jake" size={25} />
                </Pressable>
              </View>
            ),
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
