import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "../screens/HomeScreen";
import {PostsScreen} from "../screens/PostsScreen";
import {PostScreen} from "../screens/PostScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen} options={{title: "Home"}}/>
                <Stack.Screen name={"Posts"} component={PostsScreen} options={{title: "Posts"}}/>
                <Stack.Screen name={"Post"} component={PostScreen} options={{title: "Post"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}