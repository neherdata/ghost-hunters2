import { StyleSheet, Image, ImageURISource } from "react-native";

import EditScreenInfo from "../../components/NDS";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://www.github.com/neherdata.png" }}
        style={styles.ndsLogo}
      />
      <Text style={styles.title}>Ghost Hunters v2</Text>
      <View style={styles.separator} lightColor="black" darkColor="white" />
      <EditScreenInfo path="   Big tough meatbag thinks he's hot shit over here. You want it? Come and get me, punk. - Casper the 'Friendly' Ghost" />
    </View>
  );
}

const styles = StyleSheet.create({
  ndsLogo: { width: 100, height: 100 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "SpaceMono",
  },
  separator: {
    marginVertical: 10,
    marginBottom: 20,
    height: 3,
    width: "80%",
  },
});
