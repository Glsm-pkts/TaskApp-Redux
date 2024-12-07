import { StyleSheet, Text, View ,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { Calendar, Calendar1, Edit, More, Trash } from 'iconsax-react-native'
import ThemeColors from '../../theme/color';
import { setColor } from '../../utils/function';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/taskAction';
import { useNavigation } from '@react-navigation/native';
import { UPDATETASK } from '../../utils/router';

const TaskItem = ({item}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const deleteItem = () => {
    console.log(item);

    Alert.alert('Uyarı', 'Kayıt silinecek emin misiniz?', [
      {
        text: 'Sil',
        onPress: () => dispatch(deleteTask(item.id)),
        style: 'destructive',
      },
      {
        text: 'Vazgeç',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.cotainer}>
    <View style={styles.cardHeader}>

      <Text style={styles.title}>{item.title}</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
      <TouchableOpacity onPress={deleteItem}
      style={styles.optionsContainer}>
      <Trash size={25} color={ThemeColors.black} variant='Bold' />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate(UPDATETASK, {task: item})}>
        <Edit size={25} color={ThemeColors.black} variant='Bold'/>
      </TouchableOpacity>
       
      </View>
    </View>
    <View
     style={[
        styles.statusContainer,
        {backgroundColor: setColor(item.status)},
      ]}>

      <Text style={styles.status}>{item.status}</Text>
    </View>
    <View style={styles.dateContainer}>
      <Calendar size={25} />
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    cotainer: {
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        width: '95%',
        height: 150,
        margin: 10,
        borderColor: ThemeColors.black,
        borderWidth: 1,
        elevation: 7,
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      statusContainer: {
        borderColor: ThemeColors.black,
        borderWidth: 1,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 50,
        marginBottom: 10,
      },
      status: {
        fontSize: 18,
        color: ThemeColors.darkGray,
        marginBottom: 5,
        fontWeight: 'bold',
      },
      dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 10,
      },
      date: {
        fontSize: 17,
        color: ThemeColors.black,
      },
    });