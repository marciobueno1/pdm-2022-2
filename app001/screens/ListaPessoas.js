import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { Pessoa } from "../components/Pessoa";

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Marcus", idade: 25 },
  { nome: "Maria", idade: 21 },
  { nome: "Joaquim", idade: 18 },
  { nome: "José", idade: 19 },
  { nome: "Ana 2", idade: 20 },
  { nome: "Marcus 2", idade: 25 },
  { nome: "Maria 2", idade: 21 },
  { nome: "Joaquim 2", idade: 18 },
  { nome: "José 2", idade: 19 },
];

export const ListaPessoas = () => {
  const renderItem = ({ item }) => <Pessoa pessoa={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={pessoas}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        ItemSeparatorComponent={() => <View style={styles.hr} />}
        ListHeaderComponent={() => <Text style={styles.title}>Cabeçalho</Text>}
        ListFooterComponent={() => <Text style={styles.title}>Rodapé</Text>}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>Nada por agora...</Text>
        )}
        horizontal={false}
      />
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
  empty: {
    color: "red",
    fontSize: 30,
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
  hr: {
    width: "100%",
    height: 5,
    backgroundColor: "green",
  },
});
