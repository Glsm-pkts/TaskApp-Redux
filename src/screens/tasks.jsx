import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FloatAction from '../components/ui/floatAction'
import defaultScreenStyle from '../styles/defaultScreenStyle';
import { useSelector } from 'react-redux';
import ThemeColors from '../theme/color';
import TaskItem from '../components/tasks/taskItem';
import { ADDTASK } from '../utils/router';

const Tasks = ({navigation}) => {
 const{tasks} = useSelector(state => state.tasks)
  return (
    <View style={defaultScreenStyle.container}> 
    <FlatList
    ListEmptyComponent={<Text style={{textAlign:"center" , fontSize: 18 , fontWeight:"bold", marginTop:5, color:ThemeColors.darkGray}}>Henüz bir iş oluşturulmadı!</Text>}
    data={tasks}
    renderItem={({item }) => <TaskItem item={item}/> }
    />
      <FloatAction onPress={() => navigation.navigate(ADDTASK)}/>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({

})