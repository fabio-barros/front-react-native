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
import CompleteRegisterScreen from "./components/pages/CompleteRegister";
import ChooseRole from "./components/pages/ChooseRole";
import BuildingScreen from "./components/pages/Buildings";
import ApartmentsScreen from "./components/pages/Apartments";

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
                        <Stack.Screen
                            name="Buildings"
                            component={BuildingScreen}
                            options={{ title: "Prédios" }}
                        />
                        <Stack.Screen
                            name="Apartments"
                            component={ApartmentsScreen}
                            options={{ title: "Apartamentos" }}
                        />
                        <Stack.Screen
                            name="CompleteRegister"
                            component={CompleteRegisterScreen}
                            options={{ title: "Cadastro" }}
                        />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ title: "Home" }}
                        />
                        <Stack.Screen
                            name="NoticeBoard"
                            component={NoticeBoardScreen}
                            options={{ title: "Quadro de Avisos" }}
                        />
                        <Stack.Screen
                            name="TransparencyPortal"
                            component={TransparencyPortalScreen}
                            options={{ title: "Trânsparencia" }}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterScreen}
                            options={{ title: "Cadastro" }}
                        />
                        <Stack.Screen
                            name="ChooseRole"
                            component={ChooseRole}
                            options={{ title: "Role" }}
                        />
                        <Stack.Screen
                            name="CommonAreas"
                            component={CommonAreas}
                            options={{ title: "Áreas Comuns" }}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                            options={{ title: "Esqueci minha senha" }}
                        />
                        {/* </View> */}
                    </Stack.Navigator>
                </NativeBaseProvider>
            </NavigationContainer>
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
