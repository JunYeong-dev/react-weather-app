import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    // iconName : https://icons.expo.fyi/ 에서 참조
    // gradient : https://uigradients.com/ 에서 참조
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373b44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-partly-rainy",
        gradient: ["#50c9c3", "#96deda"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00d2ff", "#3a7bd5"]
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#83a4d4", "#b6fbff"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["ffe259", "ffa751"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#283048", "#859398"]
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#43cea2", "#185a9d"]
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#334d50", "#cbcaa5"]
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#43cea2", "#185a9d"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#948e99", "2e1437"]
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#43cea2", "#185a9d"]
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#4da0b0", "#d39d38"]
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#606c88", "#3f4c6b"]
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#1a2980", "#26d0ce"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#373b44", "#4286f4"]
    }
}

export default function Weather({ condition, temp }){
return (
    <LinearGradient 
        colors={ weatherOptions[condition].gradient }
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