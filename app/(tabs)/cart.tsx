import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../../components/cartItem";
import Colors from "../../constants/Colors";

export default function Cart() {
  return (
    <>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <CartItem />}
        contentContainerStyle={{
          gap: 10,
          backgroundColor: "white",
          paddingHorizontal: 10,
        }}
      />
    </>
  );
}
