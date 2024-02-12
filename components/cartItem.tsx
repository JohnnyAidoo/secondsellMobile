import { Image } from "react-native";
import { List, Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";

function CartItem() {
  return (
    <Surface
      elevation={2}
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: Colors.light.tint,
      }}
    >
      <List.Item
        titleStyle={{ fontWeight: "bold", fontSize: 20 }}
        title="title"
        description="quantity : 2"
        contentStyle={{ backgroundColor: "white" }}
        left={() => (
          <Image
            resizeMode="contain"
            resizeMethod="scale"
            width={100}
            height={100}
            source={{
              uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }}
          />
        )}
        right={() => (
          <Text
            variant="headlineSmall"
            style={{ color: Colors.light.tint, fontWeight: "bold" }}
          >
            $192
          </Text>
        )}
      />
    </Surface>
  );
}

export default CartItem;
