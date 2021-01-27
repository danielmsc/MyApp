/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button} from 'react-native';

const AboutView = ({navigation, route}) => {
    const {name, age} = route.params;

    return (
        <View>
        <Text>Acerca de...</Text>
        <Text>{name}</Text>
        <Button title="Atras" onPress={() => navigation.pop()} />
        </View>
    );
};

export default AboutView;
