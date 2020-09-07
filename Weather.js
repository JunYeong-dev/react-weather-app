import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clouds: {
        iconName: "cloud"
    }
}

export default function Weather({ condition, temp }){
return (
    <LinearGradient 
        colors={ ["#4c669f", "#3b5998", "#192f6a"] }
        style={ styles.container }>
        <View style={ styles.halfContainer }>
            <MaterialCommunityIcons 
                name={ weatherOptions[condition].iconName }
                size={ 86 } 
                color="white" />
            <Text style={ styles.temp }>{ temp }º</Text>
            <Text>{ condition }</Text>
        </View>
        <View style={ styles.halfContainer }>
        
        </View>
    </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    // 각각의 날씨 type
    condition: propTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    }
})