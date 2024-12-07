import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ThemeColors from '../../theme/color'

const Input = (props) => {
   
    const {title} = props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
  
        <TextInput {...props} style={styles.input} />
      </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: ThemeColors.darkGray
        
    },
    input:{
        padding: 10,
       backgroundColor: ThemeColors.LightGray,
        borderRadius: 5,
        fontSize: 16,
        paddingVertical:15
    }
})