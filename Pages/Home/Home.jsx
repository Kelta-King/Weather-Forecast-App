import { Text, View } from "react-native";
import style from "./Home.style";

export default function Home() {
    return (<>
        <View style={style.meteo_basic}>
            <Text style={style.txt}>Basic Weather info</Text>
        </View>
        <View style={style.searchbar_container}>
            <Text style={style.txt}>SearchBar</Text>
        </View>
        <View style={style.meteo_advanced}>
            <Text style={style.txt}>Advanded Weather info</Text>
        </View>
    </>);
}