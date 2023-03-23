import DirectoryScreen from "./DirectoryScreen";
import { View, Platform } from "react-native";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ Title: "Home" }}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Directory" screenOptions={screenOptions}>
      <Stack.Screen
        name="Directory"
        component={DirectoryScreen}
        options={{ title: "Campsite Directory" }}
      />
      <Stack.Screen
        name="CampsiteInfo"
        component={CampsiteInfoScreen}
        options={({ route }) => ({ title: route.params.campsite.name })}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: "#CEC8FF" }}>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ Title: "Home" }}
        />
        <Drawer.Screen
          name="Directory"
          component={DirectoryNavigator}
          options={{ Title: "Directory" }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
