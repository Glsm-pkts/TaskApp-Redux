import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MoreCircle } from 'iconsax-react-native'
import ThemeColors from '../../theme/color'

const TasksStatusCard = ({item,value}) => {
  return (
    <View style={[styles.container, {backgroundColor:item.color}]}>
     
      <View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.status}>{item.status}</Text>
      </View>
      <View>
        <Pressable>
          <MoreCircle size={32} color={ThemeColors.white} variant='Bold'/>
        </Pressable>
      </View>
    </View>
  )
}

export default TasksStatusCard

const styles = StyleSheet.create({
  container:{
    padding: 5,
    borderRadius: 8,
    margin: 5,
    width: "45%",
    height: 170,
    borderWidth:1,
    shadowColor: "rgba(255,255,255)",
    shadowOpacity: 0.7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  value:{
    fontSize: 25,
    fontWeight: "500",
    
  },
  status:{
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10
  }

})