import React from "react";
import { StyleSheet, Button, Alert } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <Button
        title="Click to hunt ghosts!"
        color="blue"
        onPress={() =>
          Alert.alert("This should load the fucking camera James how do we fix")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({});
