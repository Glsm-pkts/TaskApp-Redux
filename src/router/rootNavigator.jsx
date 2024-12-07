import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADDTASK, DASHBOARD, TASKS, UPDATETASK } from '../utils/router';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import ThemeColors from '../theme/color';
import { Pressable, View } from 'react-native';
import { Notification, TaskSquare } from 'iconsax-react-native';
import AddTask from '../screens/addTask';
import UpdateTask from '../screens/updateTask';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator 
    screenOptions={({route, navigation})=> ({
      headerTitleStyle: {
        fontSize: 22
      },
      headerTintColor: ThemeColors.black,
      headerBackTitle: "Back",
      headerShadowVisible: false,
     
    })}
    >
      
      <Stack.Screen 
      options={({route, navigation})=> ({
        headerRight: () => ( 
          <View style={{flexDirection:"row"}}>
    
        <Pressable>
            <Notification size={"32"} color={ThemeColors.black}/>
          </Pressable>
  
          <Pressable style={{marginLeft:15}} onPress={() => navigation.navigate(TASKS)}>
            <TaskSquare size={"32"} color={ThemeColors.black}/>
          </Pressable>
  
          </View>
          
        ),
         
      })}
      name={DASHBOARD} component={Dashboard} />
      <Stack.Screen name={TASKS} component={Tasks} />
      <Stack.Screen name={ADDTASK} component={AddTask} />
      <Stack.Screen name={UPDATETASK} component={UpdateTask} />

    </Stack.Navigator>
  );
};

export default RootNavigator;
