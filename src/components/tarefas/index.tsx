import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { styles } from "./styles";


type Props = {
    name : string;
    onRemove:()=> void;
}


export function Tarefas({name , onRemove}: Props){
    return(
        
        <View style={styles.container}>

            <Text style={styles.txtTarefa}>{name}</Text>

    
            <Ionicons style={styles.iconButton} name="trash" size={50} color="black" onPress={onRemove}/>

       
        </View>
           
            

         
    );
}
