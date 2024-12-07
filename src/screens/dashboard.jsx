import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ThemeColors from '../theme/color';
import { useSelector } from 'react-redux';
import SectionTitle from '../components/ui/sectionTitle';
import TasksStatusCard from '../components/dashboard/tasksStatusCard';
import defaultScreenStyle from '../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import { statusType } from '../utils/constants';

const Dashboard = () => {
  const {taskStatus,tasks} = useSelector(state => state.tasks)
  //taskların status bazında sayılıp ekrana yansıtılması
  const countTaskStatus =(status)=>{
    return tasks.filter(item => item?.status.toLowerCase() === status.toLowerCase()).length;
  } 
   // tasklarin yuzdeliklerini hesaplama
   const calculateTaskStatus = status => {
    const totalTasks = tasks.length;//toplam obje sayısını verecek
    const taskCount = countTaskStatus(status);//statusten gelen taskları eşitleyecek ve yüzdeliği alacak
    const percentage = ((taskCount / totalTasks) * 100).toFixed(1);

    console.log(status, percentage);
    if (percentage > 0) {
      return `${percentage}% `;
    } else {
      return '0% ';
    }
  };

  
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView style={styles.container}>
      <SectionTitle title={"Project Summary"}/>

      <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
       {
        taskStatus.map((item) => (
          
            <TasksStatusCard key={item.id} item={item} value={countTaskStatus(item.status)}/>
          
        ))
       }
      </View>
     
      <SectionTitle title= {"Project Statistics"}/>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop:-30}}>
      <VictoryPie
            innerRadius={0}
            standalone={true}
            width={350}
            height={345}
            padAngle={2}
            labelPlacement="perpendicular"
            data={[
              {
                x: "In Progress",
                y: calculateTaskStatus(statusType.INPROGRESS),
              },
              {
                x: "In Review",
                y: calculateTaskStatus(statusType.INREVIEW),
              },
              {
                x: "Completed",
                y: calculateTaskStatus(statusType.COMPLETED),
              },
              {
                x: "On Hold",
                y: calculateTaskStatus(statusType.ONHOLD),
              },
            ]}
            theme={VictoryTheme.material}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: ThemeColors.black,
                strokeWidth: 1,
                
              },
              labels: {
                fontSize: 14,
                fill: ThemeColors.darkGray,
                fontWeight: '500',
                padding: 5,
              },
            }}
          />
        </View>
    </ScrollView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({

})