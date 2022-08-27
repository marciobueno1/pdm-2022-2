import { StyleSheet, Text, View } from "react-native";

export const Pessoa = ({ pessoa }) => (
  <View>
    <Text style={styles.text}>Nome = {pessoa.nome}</Text>
    <Text style={styles.text}>Idade = {pessoa.idade}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
