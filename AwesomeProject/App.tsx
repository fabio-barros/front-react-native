import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/pages/Home";
import RegisterScreen from "./components/pages/Register";
import CommonAreas from "./components/pages/CommonAreas";
import TransparencyPortalScreen from "./components/pages/TransparencyPortal";
import NoticeBoardScreen from "./components/pages/NoticeBoard";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ForgotPasswordScreen from "./components/pages/ForgotPassword";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Stack = createStackNavigator();
type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    // define other screens here
};

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <NativeBaseProvider>
                    <Stack.Navigator
                        screenOptions={{
                            animationEnabled: true,
                            animationTypeForReplace: "push",
                            keyboardHandlingEnabled: true,
                        }}
                    >
                        {/* <View style={styles.container}> */}
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen
                            name="NoticeBoard"
                            component={NoticeBoardScreen}
                        />
                        <Stack.Screen
                            name="TransparencyPortal"
                            component={TransparencyPortalScreen}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                        />
                        <Stack.Screen
                            name="CommonAreas"
                            component={CommonAreas}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                        />
                        {/* </View> */}
                    </Stack.Navigator>
                </NativeBaseProvider>
            </NavigationContainer>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
    },
});
