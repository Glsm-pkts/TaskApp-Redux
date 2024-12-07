import { StyleSheet, View } from 'react-native'

import defaultScreenStyle from '../styles/defaultScreenStyle'
import Button from '../components/ui/button'
import Input from '../components/ui/input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../redux/actions/taskAction'

const UpdateTask = ({route}) => {
  const task = route.params.task
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch()

  const saveTask = () => {
     const form = {
      id: task.id,
      title: title,
      date: date,
      status: status,
     }
     dispatch(updateTask(form))
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

      <Button onPress={() => saveTask("basıldı")} title="Güncelle" status="warning"/>
    </View>
  )
}

export default UpdateTask

const styles = StyleSheet.create({})