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
      <Link href={`/${props.id}`}>
        <Image
          resizeMethod="resize"
          resizeMode="contain"
          width={200}
          height={200}
          source={{
            uri: props.image,
          }}
        />
      </Link>
      <View style={{ gap: 5, display: "flex", backgroundColor: "white" }}>
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
      <IconButton
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
        size={15}
      />
    </Surface>
  );
}

export default CardComp;
