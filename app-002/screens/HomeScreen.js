import { Button, StyleSheet, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "beige",
      }}
    >
      <Text style={styles.titulo}>Home Screen</Text>
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Details 86"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
      <Button
        title="Go to Details 87"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 87,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontFamily: "Inter-Black",
    fontSize: 24,
  },
});
