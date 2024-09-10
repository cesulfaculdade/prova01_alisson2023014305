import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Tarefas } from "../components/tarefas";




export default function Home(){

    
    const [tarefas,setTarefas]= useState<string[]>([]);
    const[tarefasNome, setTarefasNome] = useState('');

    
    
    function handleTarefaAdd(){
       
        setTarefas((prevState)=>[...prevState, tarefasNome]);
        setTarefasNome('');
        
    }
    function handleTarefaRemove(name: string){
        Alert.alert("Remover",`Deseja remover a tarefa? ${name}?`,[
            {
                text:'Sim',
                onPress: () => setTarefas(prevState => prevState.filter(tarefas => tarefas != name))
            },
            {
                text:'Não',
                style: 'cancel'
            }
        ])
    }
    return(


        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.titleContainer}>Lista de Tarefas</Text>
            <Text style={styles.txtHeader}>Adicione suas atividades a lista de tarefas</Text>

            </View>

            <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Descrição da tarefa">




            </TextInput>

            <TouchableOpacity style={styles.button} 
            onPress={handleTarefaAdd}
            >
                <Text style={styles.txtButton}>
                    +
                </Text>
            </TouchableOpacity>

            
            
            </View>

           
            
            <Text style={styles.tarefasPendentes}>Tarefas Pendentes</Text>
    
            <FlatList
            data={tarefas}
            keyExtractor={item => item} 
            renderItem={({item})=> (
            <Tarefas name={item} onRemove={()=> handleTarefaRemove(item)}/>
        )} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={tarefas.length <= 0 && styles.list}
            ListEmptyComponent={()=>(
                
                <Text style={styles.listEmptyText}>Realizou todas as tarefas? Adicione tarefas a sua lista de pendências.</Text>

            )}
        />



        </View>

    );

}
const styles = StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:"#7A4A9E"


    },
    header:{
        marginLeft:24,
        marginTop:112,

    },
    titleContainer:{
        fontWeight:"700",
        fontSize: 24,
        color: "#F2F2F2",
        
    },
    txtHeader:{
        color: "#F2F2F2",
    },
    form:{
        marginTop:25, 
        flex:1,
        flexDirection:"row",
        marginRight:24,
        
    },
    input:{
        height: 54,
        width:345,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        backgroundColor:"#F2F2F2",
        marginLeft:24,
        
    },

    button:{
        backgroundColor:"#31C667",
        height: 54,
        width: 54,
        justifyContent:"center",
        alignItems:"center",
        borderTopRightRadius:5,
        borderBottomRightRadius:5
     
        
    },
    txtButton:{
        color:"#fff",
        fontSize:25
    },
    tarefasPendentes:{
         marginLeft:24,
         color:"#fff",
         fontWeight:"700",
         fontSize: 20,
         marginBottom:24,
         top: -260
    },
    
    listEmptyText:{
        marginLeft:24,
        color:"#fff",
        fontSize:16,
    },
    list:{
        
    }



})