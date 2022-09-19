import React from "react";
import { View, Text } from "react-native";
import { HEIGHT, WIDTH } from "../consts";

export default function CardSix() {
    return (

        <View style={{ height: WIDTH / 1.9, width: WIDTH / 1.2, marginTop: HEIGHT / 40, flexDirection: 'column' }} >

            <View style={{ flexDirection: 'row', marginTop: WIDTH / 15, justifyContent: 'center', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'black' }} >
                <Text style={{ fontSize: WIDTH / 20, color: 'black', marginRight: WIDTH / 4, marginTop: WIDTH / 10 }}>Ответ 1</Text>
                <Text style={{ fontSize: WIDTH / 20, color: 'black', marginTop: WIDTH / 10 }}>Ответ 2</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: WIDTH / 5, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderTopColor: 'black' }} >
                <Text style={{ fontSize: WIDTH / 20, color: 'black', marginRight: WIDTH / 4, marginBottom: WIDTH / 10 }}>Ответ 3</Text>
                <Text style={{ fontSize: WIDTH / 20, color: 'black', marginBottom: WIDTH / 10 }}>Ответ 4</Text>
            </View>

        </View>
    )
}