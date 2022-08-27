import {
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={require("../assets/images/sport.jpg")}
          />
        </View>
        <Text style={styles.title}>Olá Mundo!</Text>
        <Text style={{ fontSize: 30 }}>Segundo parágrafo</Text>
        <View style={{ backgroundColor: "red", width: 320, height: 320 }} />
        <Text style={{ fontSize: 30 }}>Terceiro parágrafo</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewContainer: {
    alignItems: "center",
  },
  title: {
    color: "blue",
    fontSize: 40,
  },
  view: {
    width: 300,
    height: 300,
    backgroundColor: "yellow",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
});
