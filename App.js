import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as FileSystem from 'expo-file-system';

export default function App() {
  
  const Stack = createStackNavigator();

  const testActivity = "ListActivity"

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ testActivity }>
        <Stack.Screen name="MainActivity" component={ MainActivity } />
        <Stack.Screen name="ListActivity" component={ ListActivity } />
        <Stack.Screen name="AnalyzeActivity" component={ AnalyzeActivity } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function AnalyzeActivity(){
  return (
    <View>
      <Text>AnalyzeActivity</Text>
    </View>
  )
}

export function ListActivity(){

  const [ myFiles, setMyFiles ] = useState([
    {
      name: "index.html",
      size: 255,
    },
    {
      name: "App.js",
      size: 1024,
    },
    {
      name: "photo.png",
      size: 256,
    },
    {
      name: "index.js",
      size: 2048,
    },
    {
      name: "index.php",
      size: 10,
    }
  ])

  const [ totalSize, setTotalSize ] = useState(0)
  useEffect(async () => {
    
    // const dirInfo = await FileSystem.getInfoAsync(FileSystem.cacheDirectory);
    // setMyFiles(dirInfo)
    // console.log(`dirInfo: ${dirInfo}`)

    let totalSizeOfFiles = 0
    myFiles.map(myFile => {
      totalSizeOfFiles += myFile.size
      // setTotalSize(totalSize + myFile.size)
    })
    setTotalSize(totalSizeOfFiles)
  }, [])

  return (
    <View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
          <MaterialCommunityIcons name="folder-home" size={36} color="rgb(145, 145, 145)" />
          <Fontisto name="caret-right" size={12} color="black" />
          <Text style={{ color: "rgb(255, 150, 0)", fontWeight: 700 }}>{ "Изображения" }</Text>
        </View>
        <View>
          <Text>{ totalSize } Мб</Text>
        </View>
      </View>
      
      {
        myFiles.map(myFile => {
          return (
            <View style={{ marginTop: 25 }}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                  <FontAwesome name="folder" size={36} color="black" />
                </View>
                <View style={{ display: 'flex', width: "95%", flexDirection: 'column' }}>
                  <Text style={{ alignSelf: 'flex-start' }}>{ myFile.name }</Text>
                  <Text style={{ alignSelf: 'flex-end' }}>{ `${myFile.size} байт` }</Text>
                </View>
              </View>
            </View>
          )
        })
      }

    </View>
  )
}

export function MainActivity({ navigation }) {
  return (
    <View style={{ backgroundColor: "rgb(215, 215, 215)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      
      <TouchableOpacity onPress={() => {
        console.log("переходим к картинкам")
        navigation.navigate("ListActivity", {
          filesType: "image"
        })
      }}>
        <View style={{ marginHorizontal: 75, marginVertical: 25, borderRadius: 35, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <MaterialCommunityIcons name="clock" size={24} color="rgb(255, 0, 0)" style={{ alignSelf: "center" }} />
          <Text style={{ marginVertical: 25 }}>Последние файлы</Text>
        </View>
      </TouchableOpacity>

      <View style={{ marginHorizontal: 75, marginVertical: 25, borderRadius: 35, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Text style={{ marginLeft: 75, marginVertical: 25 }}>Категории</Text>
        <View style={{ marginHorizontal: 75, marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {
            console.log("переходим к картинкам")
            navigation.navigate("ListActivity", {
              filesType: "image"
            })
          }}>
            <Entypo name="image-inverted" size={24} color="rgb(255, 0, 0)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("переходим к видео")
            navigation.navigate("ListActivity", {
              filesType: "video"
            })
          }}>
            <Entypo name="video" size={24} color="rgb(200, 0, 255)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("переходим к музыке")
            navigation.navigate("ListActivity", {
              filesType: "music"
            })
          }}>
            <Foundation name="music" size={24} color="rgb(0, 0, 255)" />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 75, marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => {
              console.log("переходим к документам")
              navigation.navigate("ListActivity", {
                filesType: "documents"
              })
            }}>
            <Ionicons name="md-document-text" size={24} color="rgb(255, 150, 0)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("переходим к загрузкам")
            navigation.navigate("ListActivity", {
              filesType: "download"
            })
          }}>
            <Fontisto name="download" size={24} color="rgb(0, 150, 255)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log("переходим к apk")
            navigation.navigate("ListActivity", {
              filesType: "apk"
            })
          }}>
            <Text style={{ fontWeight: 700, color: "rgb(0, 255, 0)" }}>APK</Text>
          </TouchableOpacity>
        </View>
  
      </View>

      <TouchableOpacity onPress={() => {
        console.log("переходим к памяти телефона")
        navigation.navigate("ListActivity", {
          filesType: "none"
        })
      }}>
        <View style={{ textAlign: "center", marginHorizontal: 75, marginVertical: 25, borderRadius: 35, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <Text style={{ marginVertical: 25 }}>Память устройства</Text>
          <Text style={{ marginVertical: 25 }}>31,26 Гб / 32,00 Гб</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ marginVertical: 25, textAlign: "center" }}>Узнайте, что занимает место в памяти телефона</Text>
      <TouchableOpacity onPress={() => {
        console.log("переходим к анализу")
        navigation.navigate("AnalyzeActivity")
      }}>
        <View style={{ textAlign: "center", marginHorizontal: 75, marginVertical: 25, borderRadius: 35, backgroundColor: "rgb(255, 150, 0)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <Text style={{ marginVertical: 25, color: "rgb(255, 255, 255)", fontWeight: 700 }}>Анализ хранилища</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
