import { StyleSheet, View } from 'react-native'

import defaultScreenStyle from '../styles/defaultScreenStyle'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../redux/actions/taskAction'
import { statusType } from '../utils/constants'

const AddTask = () => {
  const [title, setTitle] = useState("1236666");
  const [date, setDate] = useState("20 ekim 2024");
  const [status, setStatus] = useState(statusType.ONHOLD);
  const dispatch = useDispatch()

  const saveTask = () => {
     const form = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
     }
     dispatch(addNewTask(form))
  }

  return (
    <View style={defaultScreenStyle.container}>
      
      <Input 
      onChangeText={value => setTitle(value)}
      value={title} 
      title="Task Title" 
      placeholder='Please set title'
      />

      <Input 
      value={date}  
      title="Task Date" 
      placeholder='Please set date'
      onChangeText={(value) => setDate(value)}/>
      

      <Input 
      onChangeText={value => setStatus(value)}  
      value={status} 
      title="Task Status" 
      placeholder='Please set status'/>

      <Button onPress={() => saveTask("basıldı")} title="Kaydet" status="success"/>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({})