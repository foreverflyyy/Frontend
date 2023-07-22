import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

export const HomeScreen = ({navigation}) => {

    return (
        <View
            style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}
        >
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
                <Text>
                    HomeScreen
                </Text>
            </TouchableOpacity>
        </View>
    );
};