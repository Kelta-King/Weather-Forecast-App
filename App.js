import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, ImageBackground } from "react-native";
import bgImage from "./assets/background.png";
import style from "./App.style"
import Home from "./Pages/Home/Home";
import { useState, useEffect } from "react";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location"

export default function App() {

    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        getUserPosition();
    }, []);

    async function getUserPosition() {
        const { status } = await requestForegroundPermissionsAsync();
        console.log("Status: ", status);
        if (status === "granted") {
            console.log("Granted");
            const location = await getCurrentPositionAsync();
            setCoordinates({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        }
        else {
            console.log("Not Granted");
            setCoordinates({
                lat: "",
                lng: "",
            });
        }
    }

    useEffect(() => {
        console.log(coordinates);
    }, [coordinates]);

    return (
        <ImageBackground
            source={bgImage}
            imageStyle={style.img}
            style={style.backgroundImage}
        >
            <SafeAreaProvider>
                <SafeAreaView style={style.container}>
                    <Home />
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}

