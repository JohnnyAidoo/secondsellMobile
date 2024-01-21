import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { Dimensions } from "react-native";
import { Surface, Text } from "react-native-paper";
import Colors from "../constants/Colors";

function ProductInfo() {
  type ProductType = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  };

  const [product, setProduct] = useState<ProductType>();
  const { productInfo } = useLocalSearchParams();
  const HEIGHT = Dimensions.get("screen").height;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productInfo}`)
      .then((res: any) => {
        setProduct({
          id: res.data.id,
          category: res.data.category,
          description: res.data.description,
          image: res.data.image,
          price: res.data.price,
          title: res.data.title,
        });
      });
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "white" },
          headerLeft: () => (
            <Ionicons
              name="return-down-back-outline"
              size={25}
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      <ScrollView style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
        <Surface
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "white",
          }}
        >
          <Animatable.Image
            source={{ uri: product?.image }}
            style={{ aspectRatio: 1, height: HEIGHT / 3 }}
          />
        </Surface>
        <Text variant="displayMedium" style={{ fontWeight: "bold" }}>
          {product?.title}
        </Text>
        <Text variant="headlineMedium" style={{ color: Colors.light.tint }}>
          £{product?.price}
        </Text>
        <Text variant="labelLarge">{product?.description}</Text>
      </ScrollView>
    </>
  );
}

export default ProductInfo;
