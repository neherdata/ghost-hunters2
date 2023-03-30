import React from "react";
import { StyleSheet } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

export default function NDS({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="black"
          darkColor="white"
        >
          You punks ready to find some ghosts? Cause they're out there causing
          mayhem and stealing your shoes. Ever lost a shoe and swore it was that
          one neighbor everyone has seen wearing two different shoes at a time?
          It ain't him my friend, you got ghosts.
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Need support? We can't help you find a ghosts, that is why we made the
          app dude don't be a bum. But for technical whatnots, privacy whosits,
          and terms of some services, hit us up!
        </Text>
      </View>

      <View style={styles.neherDShomeContainer}>
        <ExternalLink style={styles.neherDShomeLink} href="www.neherdata.com">
          <Text
            style={styles.neherDShomeLinkText}
            lightColor={Colors.light.tint}
          >
            NDS Homepage
          </Text>
        </ExternalLink>
      </View>

      <View style={styles.neherDShomeContainer}>
        <ExternalLink
          style={styles.neherDShomeLink}
          href="mailto:support@neherdata.com"
        >
          <Text
            style={styles.neherDShomeLinkText}
            lightColor={Colors.light.tint}
          >
            NDS Email Support
          </Text>
        </ExternalLink>
      </View>
      <View style={styles.neherDShomeContainer}>
        <ExternalLink
          style={styles.neherDShomeLink}
          href="privacy.neherdata.com"
        >
          <Text
            style={styles.neherDShomeLinkText}
            lightColor={Colors.light.tint}
          >
            NDS Privacy Policy
          </Text>
        </ExternalLink>
      </View>
      <View style={styles.neherDShomeContainer}>
        <ExternalLink style={styles.neherDShomeLink} href="tos.neherdata.com">
          <Text
            style={styles.neherDShomeLinkText}
            lightColor={Colors.light.tint}
          >
            NDS Terms of Service
          </Text>
        </ExternalLink>
      </View>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="lightgrey"
      >
        <MonoText>{path}</MonoText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "flex-start",
    marginHorizontal: 50,
    fontFamily: "SpaceMono",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    verticalAlign: "bottom",
    paddingVertical: 15,
    marginHorizontal: 70,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "left",
    marginHorizontal: -5,
  },
  neherDShomeContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
    paddingBottom: 5,
  },
  neherDShomeLink: {
    paddingVertical: 0,
    fontWeight: "bold",
    paddingTop: 2,
  },
  neherDShomeLinkText: {
    textAlign: "center",
  },
});
