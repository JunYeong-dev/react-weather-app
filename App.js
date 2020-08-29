// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
// import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading'
import * as Location from 'expo-location';


export default class extends React.Component {
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch(error) {
      Alert.alert("Please allow app permissions");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />
  }
}
















// export default function App() {
//   return <Loading></Loading>
//     <View style={styles.container}>
//       {/* 리액트 네이티브에서 <View> 태그는 <div>와 같음 */}
//       <View style={styles.yellowView}></View>
//       <View style={styles.blueView}></View>
//       <StatusBar style="auto" />
//     </View>
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex : 기본적으로 화면을 얼마나 사용할 것인지 정하는 옵션, container의 경우 부모이기 때문에 항상 모든 화면을 사용
//     flex: 1,
//     // flexDirection: "row" : 태그의 정렬 방식 default는 줄바꿈이지만 이 옵션으로 설정하면 한 줄에 정렬

//     // default 옵션
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',

//     // 일반적인 css라면 container가 부모이기 때문에 
//     // color에 따라 글자 색이 바뀌겠지만 '리액트 네이티브'이기 때문에 적용이 되지 않음
//     color: "white"
//   },
//   text: {
//     color: "black",
//     fontSize: 100
//   },
//   /*
//     yellowView, blueView가 flex옵션을 가지고 있는데 각각 1, 2로 설정했을 경우 부모인 container가 가진
//     화면에서 각각의 비율에 맞게 할당되게 됨(IPhone이든 IPad든 기계의 크기와 상관없이 비율로 할당되기 때문에 flex로 레이아웃을 정하는것이 좋음)
//     이 경우 전체 화면에서 yellow부분은 1/3, blue부분은 2/3이 됨
//   */
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow"
//   },
//   blueView: {
//     flex: 2,
//     backgroundColor: "blue"
//   }
// });
