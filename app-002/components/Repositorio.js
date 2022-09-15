import { StyleSheet, Text, View } from "react-native";

export const Repositorio = ({ repo }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>
      {repo.name} - {repo.stargazers_count}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "aqua",
    height: 60,
    marginBottom: 5,
  },
  titulo: {
    fontSize: 24,
  },
});
