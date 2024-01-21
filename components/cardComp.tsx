import { Image, Pressable } from "react-native";
import { IconButton, Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import * as Animatable from "react-native-animatable";
import { Link, router } from "expo-router";

function CardComp(props: {
  id: number;
  title: string;
  price: string;
  category: string;
  description?: string;
  image: string;
}) {
  return (
    <Link href={`/${props.id}`}>
      <Animatable.View
        animation="slideInDown"
        delay={(props.id as number) * 100}
      >
        <Surface
          elevation={2}
          style={{
            width: 160,
            margin: 5,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Image
            style={{ aspectRatio: 1, width: "100%" }}
            source={{
              uri: props.image,
            }}
          />
          <View style={{ gap: 5, display: "flex", backgroundColor: "white" }}>
            <Text
              id="title"
              variant="headlineSmall"
              style={{ fontWeight: "bold" }}
            >
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
            icon="bookmark"
            size={15}
          />
        </Surface>
      </Animatable.View>
    </Link>
  );
}

export default CardComp;
