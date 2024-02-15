import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, ScrollView } from "react-native";
import { Surface, Text } from "react-native-paper";
import Colors from "../../../constants/Colors";
import CardComp from "../../../components/cardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { View } from "../../../components/Themed";

export default function Jewelery() {
  type ProductType = {
    id: number;
    title: string;
    category: string;
    price: string | number;
    description: string;
    image: string;
    rating: any;
  };

  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
  ]);
  const [Ad, setAd] = useState<ProductType>();

  const WIDTH = Dimensions.get("screen").width;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((res: any) => {
        setProducts(res.data);
      });
    setAd(products[Math.floor(Math.random() * 4)]);
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
