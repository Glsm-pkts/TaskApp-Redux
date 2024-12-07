import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import ThemeColors from '../../theme/color'
import { Add } from 'iconsax-react-native'
import { ADDTASK } from '../../utils/router'

const FloatAction = (props) => {
  return (
    <TouchableOpacity 
    {...props}
    style={styles.container}>
     <Add size={44} variant='Bold' color={ThemeColors.white}/>
    </TouchableOpacity>
  )
}

export default FloatAction

const styles = StyleSheet.create({
container:{
   backgroundColor: ThemeColors.Lightgreen,
   width:80,
   height:80,
   alignItems:"center",
   justifyContent:"center",
   borderRadius:50,
   position:"absolute",
   bottom:25,
   right:10
  
}

})