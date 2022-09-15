import { FlatList, StyleSheet, Text, View } from "react-native";
import useSWR from "swr";
import { fetcher } from "../api";
import { Repositorio } from "../components/Repositorio";

export const ListScreen = () => {
  const { data, error } = useSWR(
    "https://api.github.com/users/marciobueno-unicap/repos",
    fetcher
  );
  const renderItem = ({ item }) => <Repositorio repo={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>List Screen</Text>
      {!!error && (
        <Text style={styles.error}>
          Erro ao realizar a consulta a API: {JSON.stringify(error)}
        </Text>
      )}
      {!!data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "beige",
  },
  titulo: {
    fontSize: 32,
  },
  error: {
    fontSize: 24,
    color: "red",
  },
});
