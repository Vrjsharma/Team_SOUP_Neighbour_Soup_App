import { Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Marketplace from "./pages/marketplace/Buy";
import Sell from "./pages/marketplace/Sell";
import Buy from "./pages/marketplace/Buy";
import CreateListing from "./pages/marketplace/CreateListing";
import ListingDetails from './pages/marketplace/ListingDetails';
import EditListing from './pages/marketplace/EditListing';
const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
    const TabsNav = () => (
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="Marketplace"
            component={Marketplace}
            options={{
            tabBarIcon: ({ size }) => <Fontisto name="shopping-store" size={size} color="black" />,
            }}
        />
        {/* <Tabs.Screen
            name="Profile"
            component={account}
            options={{
            tabBarIcon: ({ size }) => <Ionicons name="md-settings" size={size} />,
            }}
        /> */}
        </Tabs.Navigator>
    );

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="BottomTabs">
                <RootStack.Screen
                name="BottomTabs"
                component={TabsNav}
                options={{ headerShown: false }}
                />
                <RootStack.Screen
                name="Sell"
                component={Sell}
                options={{animation: 'none', headerShown: false, }}
                />
                <RootStack.Screen
                name="Buy"
                component={Buy}
                options={{animation: 'none',  headerShown: false,}}
                />
                <RootStack.Screen
                name="Add Listing"
                component={CreateListing}
                options={{ 
                    headerStyle: {height: 120},
                    headerTitleStyle: {fontSize: 20}, 
                    headerBackTitle: "", 
                    headerBackTitleStyle: {fontSize: 30},
                    headerTintColor: 'black'
                }}
                />
                <RootStack.Screen
                name="Edit Listing"
                component={EditListing}
                options={{ 
                    headerStyle: {height: 120},
                    headerTitleStyle: {fontSize: 20}, 
                    headerBackTitle: "", 
                    headerBackTitleStyle: {fontSize: 30},
                    headerTintColor: 'black'
                }}
                />
                <RootStack.Screen
                    name="ListingDetails"
                    component={ListingDetails}
                    options={{ 
                        headerStyle: {height: 120},
                        headerTitleStyle: {fontSize: 20}, 
                        headerBackTitle: "", 
                        headerBackTitleStyle: {fontSize: 30},
                        headerTintColor: 'black'
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
