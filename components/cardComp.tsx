import { Dimensions, Image, Pressable } from "react-native";
import { IconButton, Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import { Link, router } from "expo-router";

function CardComp(props: {
  id: number;
  title: string;
  price: string;
  description?: string;
  image: string;
  category: string;
}) {
  const WIDTH = Dimensions.get("screen").width;
  return (
    <Surface
      elevation={2}
      style={{
        width: WIDTH / 2 - 20,
        margin: 5,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <Pressable onPress={() => router.push(`/${props.id}`)}>
        <Image
          style={{ marginLeft: 15 }}
          resizeMode="contain"
          width={150}
          height={100}
          source={{
            uri: props.image,
          }}
        />

        <View
          style={{
            gap: 5,
            display: "flex",
            backgroundColor: "white",
            width: "100%",
            marginHorizontal: 20,
          }}
        >
          <Text id="title" variant="titleMedium" style={{ fontWeight: "bold" }}>
            {props.title}
          </Text>
          <Text id="category" variant="labelLarge">
            {props.category}
          </Text>
          <Text
            variant="headlineMedium"
            style={{
              fontWeight: "bold",
              color: Colors.light.tint,
              textAlign: "left",
            }}
          >
            £{props.price}
          </Text>
        </View>
      </Pressable>
      <IconButton
        onPress={() => router.push(`/${props.id}`)}
        style={{
          position: "absolute",
          bottom: -10,
          right: -10,
          zIndex: 2,
          backgroundColor: Colors.light.tint,
          borderRadius: 5,
        }}
        iconColor="white"
        icon="bookmark-outline"
        size={20}
      />
    </Surface>
  );
}

export default CardComp;
