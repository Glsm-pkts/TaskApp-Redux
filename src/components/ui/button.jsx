import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemeColors from '../../theme/color'

const Button = (props) => {
    const {title, status} = props
    const setColor =() => {
        switch(status) {
            case "success":
                return ThemeColors.green;
            case "warning":
                return ThemeColors.yellow;
            default:
                return ThemeColors.blue;
        }
    }
  return (
    <TouchableOpacity {...props} 
    style={[styles.container,{backgroundColor:setColor()}]}
    >
      <Text style={styles.title}>{title}</Text>
      
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:15,
        margin: 10
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        color: ThemeColors.white,
    }
    
})