import { useEvent } from "expo";
import NetInfo from "net-info";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result: {NetInfo.isConnected() ? "Connected" : "Offline"}</Text>
      <Text>IP: {NetInfo.ipAddress()}</Text>
      <Text>
        Internet Reachable: {NetInfo.isInternetReachable() ? "True" : "False"}
      </Text>
      <Text>Wifi enable: {NetInfo.isWifiEnable() ? "True" : "False"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
