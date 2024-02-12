import { Drawer } from "expo-router/drawer";
import { View } from "../../../components/Themed";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Text } from "react-native-paper";
import Colors from "../../../constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />;
}

function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTintColor: "black" }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "All Product",
          headerStyle: { backgroundColor: Colors.light.background },
          headerTitle: "",
          headerTintColor: "black",
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
              {/* <Pressable onPress={() => {}}>
                <TabBarIcon name="search1" color="black" />
              </Pressable> */}
              <Pressable onPress={() => {}}>
                <Avatar.Image
                  size={25}
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                />
              </Pressable>
            </View>
          ),
        }}
      />
    </Drawer>
  );
}

export default DrawerLayout;
