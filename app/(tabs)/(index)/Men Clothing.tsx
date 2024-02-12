import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, ScrollView } from "react-native";
import { Surface, Text } from "react-native-paper";
import Colors from "../../../constants/Colors";
import CardComp from "../../../components/cardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { View } from "../../../components/Themed";

export default function MenCloths() {
  type ProductType = {
    id: number;
    title: string;
    category: string;
    price: string | number;
    description: string;
    image: string;
  };

  const [products, setProducts] = useState<ProductType[]>();
  const [Ad, setAd] = useState<ProductType>();

  const WIDTH = Dimensions.get("screen").width;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((res: any) => {
        setProducts(res.data);
        setAd(res.data[Math.floor(Math.random() * 4)]);
      });
  }, []);
  return (
    <>
      <StatusBar />
      <ScrollView style={{ backgroundColor: Colors.light.background }}>
        <Surface
          style={{
            width: WIDTH,
            display: "flex",
            flexDirection: "row",
            marginLeft: 30,
            padding: 15,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "50%", backgroundColor: "white" }}>
            <Animatable.View animation={"fadeInDownBig"}>
              <Text
                variant="displayMedium"
                style={{ fontWeight: "bold", color: Colors.light.tint }}
              >
                New
              </Text>
            </Animatable.View>
            <Animatable.View animation={"fadeInUpBig"}>
              <Text variant="displayMedium" style={{ fontWeight: "bold" }}>
                Arrivals
              </Text>
              <Text>{Ad?.title}</Text>
            </Animatable.View>
          </View>
          <View style={{ width: "50%", backgroundColor: "white" }}>
            <Animatable.Image
              resizeMethod="scale"
              resizeMode="center"
              animation="fadeInLeftBig"
              style={{ width: WIDTH / 2.5, height: "auto", aspectRatio: 1 }}
              source={{
                uri: Ad?.image,
              }}
            />
          </View>
        </Surface>

        <FlatList
          scrollEnabled={false}
          style={{ width: WIDTH, padding: 10 }}
          numColumns={2}
          renderItem={({ item, index }) => (
            <Animatable.View animation={"fadeInDown"} delay={index * 100}>
              <CardComp
                id={item.id}
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price as string}
                image={item.image}
              />
            </Animatable.View>
          )}
          data={products}
        />
      </ScrollView>
    </>
  );
}
