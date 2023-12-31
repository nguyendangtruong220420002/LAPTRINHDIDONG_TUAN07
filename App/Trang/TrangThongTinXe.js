
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React,{useEffect} from 'react';
import { useRoute } from '@react-navigation/native';

const TrangThongTinXe =()=> {

  const route = useRoute();
  const item = route.params;
  useEffect(()=>{
    if (route.params?.selecitem) {
    }
  }, [route.params?.selecitem]
  );
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Pressable style={styles.Pre}>
          <Image source={item.img} style={styles.img}></Image>
        </Pressable>
      </View>

      <View style={styles.view1}>
        <Text style={styles.text}>{item.name}</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text1}>{item.sale} OFF | {item.price}</Text>
        <Text style={styles.text2}>{item.pricesale}</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text3}>Description</Text>
        <Text style={styles.text4}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={styles.view4}>
        <Image
          source={require("../../App/IMG/tym.png")}
          style={styles.img1}
        />
        <Pressable style={styles.Pre1}>
          <Text style={styles.textPre}>ADD TO CARD</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  view: {
    alignItems: "center",
  },
  view1: {
    marginTop: 30,
  },
  view2: {
    marginTop: 20,
    flexDirection: "row",
  },
  view3: {
    marginTop: 30,
  },
  view4: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    height: 340,
    width: 297,
    resizeMode: "contain",
  },
  img1: {
    height: 35,
    width: 35,
    resizeMode: "contain",
  },
  Pre: {
    width: 360,
    height: 388,
    backgroundColor: "#E941411A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: 700,
  },
  text1: {
    color: "#00000096",
    fontSize: 25,
    fontWeight: 700,
  },
  text2: {
    fontSize: 25,
    fontWeight: 700,
    marginLeft: 80,
    textDecorationLine: "line-through",
  },
  text3: {
    fontSize: 20,
    fontWeight: 700,
  },
  text4: {
    fontSize: 16,
    fontWeight: 700,
    marginTop: 20,
    width: 335,
  },
  Pre1: {
    width: 269,
    height: 54,
    backgroundColor: "#E94141",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textPre: {
    fontSize: 20,
    color: "#ffff",
    fontWeight: 700,
  },
});
export default TrangThongTinXe;
