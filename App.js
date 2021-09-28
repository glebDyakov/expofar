import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, CheckBox, ToastAndroid, BackHandler, ScrollView } from 'react-native';

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

import * as Progress from 'react-native-progress';

export default function App() {
  
  const Stack = createStackNavigator();

  const testActivity = "AnalyzeActivity"

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
    <ScrollView>
      <View style={{ borderRadius: 15, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 450 }}>
        {/* <View style={{ marginVertical: 15 }}> */}
          <Text style={{ fontSize: 18 }}>Память устройства</Text>
        {/* </View> */}
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ alignSelf: 'flex-end', fontSize: 36, fontWeight: 700 }}>97%</Text>
          <Text style={{ alignSelf: 'flex-end', fontSize: 16 }}> использовано</Text>
        </View>
        <Progress.Bar progress={ 97 } style={{ height: 45, backgroundColor: "rgb(0, 0, 255)" }} width={ "100%" } />
        <View style={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
          <Text>31,09</Text>
          <Text>32,00</Text>
        </View>

      </View>

      <View style={{ marginVertical: 15, borderRadius: 15, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View>
            <Text style={{ fontSize: 18 }}>Дублирование файлов</Text>
            <Text>140 Мб</Text>
          </View>
          <View>
            <Entypo name="chevron-thin-right" size={24} color="black" />
          </View>
        </View>
        <View style={{ width: "100%", height: 125, backgroundColor: "rgb(245, 245, 245)",display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 15, borderRadius: 15, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View>
            <Text style={{ fontSize: 18 }}>Большие файлы</Text>
            <Text>140 Мб</Text>
          </View>
          <View>
            <Entypo name="chevron-thin-right" size={24} color="black" />
          </View>
        </View>
        <View style={{ width: "100%", height: 125, backgroundColor: "rgb(245, 245, 245)",display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginVertical: 15, borderRadius: 15, backgroundColor: "rgb(255, 255, 255)", display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <View>
            <Text style={{ fontSize: 18 }}>Неиспользуемые файлы</Text>
            <Text>140 Мб</Text>
          </View>
          <View>
            <Entypo name="chevron-thin-right" size={24} color="black" />
          </View>
        </View>
        <View style={{ width: "100%", height: 125, backgroundColor: "rgb(245, 245, 245)",display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
          <View style={{ width: 175, height: 125, backgroundColor: "rgb(245, 245, 245)", borderWidth: 2, borderColor: "rgb(175, 175, 175)", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', height: '75%' }}>
              <MaterialCommunityIcons name="folder-home" size={72} color="rgb(145, 145, 145)" />
            </View>
            <View style={{  backgroundColor: "rgb(175, 175, 175)", height: '25%' }}>
              <Text>
                karl.zip
              </Text>
            </View>
          </View>
        </View>
      </View>
      
    </ScrollView>
  )
}

export function ListActivity(){

  const [ myFiles, setMyFiles ] = useState([
    {
      name: "index.html",
      size: 255,
      ext: "txt"
    },
    {
      name: "style.css",
      size: 100500,
      ext: "apk"
    },
    {
      name: "App.js",
      size: 1024,
      ext: "torrent"
    },
    {
      name: "photo.png",
      size: 256,
      ext: "mp3"
    },
    {
      name: "index.js",
      size: 2048,
      ext: "mp4"
    },
    {
      name: "index.php",
      size: 10,
      ext: "img"
    }
  ])

  const [ totalSize, setTotalSize ] = useState(0)

  const [ isSelectedCheckboxes, setSelectionCheckboxes ] = myFiles.map(myFile => useState(false))

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

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const [ checkboxesVisible, setCheckboxesVisible ] = useState(true)

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
        myFiles.map((myFile, myFileIdx) => {
          return (
            <View style={{ marginTop: 25 }}>
              <TouchableOpacity onLongPress={() => setCheckboxesVisible(!checkboxesVisible) }>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  {
                    !checkboxesVisible ?
                      <CheckBox
                        value={isSelectedCheckboxes[myFileIdx]}
                        onValueChange={setSelectionCheckboxes[myFileIdx]}
                        style={{ display: checkboxesVisible ? 'none' : 'block' }}
                      />
                    :
                    <Text></Text>
                  }
                  
                  {/* <CheckBox
                    style={{ alignSelf: "center" }}
                    value={ false }
                  /> */}
                  
                  <View style={{ display: 'flex', flexDirection: 'column' }}>
                    {
                      myFile.ext.includes("txt") ?
                        <Ionicons name="md-document-text" size={24} color="rgb(255, 150, 0)" />
                      : myFile.ext.includes("mp4")  ?
                        <Entypo name="video" size={24} color="rgb(200, 0, 255)" />
                      : myFile.ext.includes("mp3")  ?
                        <Foundation name="music" size={24} color="rgb(0, 0, 255)" />
                      : myFile.ext.includes("png")  ?
                        <Entypo name="image-inverted" size={24} color="rgb(255, 0, 0)" />
                      : myFile.ext.includes("apk")  ?
                        <Text style={{ fontWeight: 700, color: "rgb(0, 255, 0)" }}>APK</Text>
                      : myFile.ext.includes("img")  ?
                        <FontAwesome name="folder" size={36} color="black" />
                      : 
                        <MaterialCommunityIcons name="folder-home" size={36} color="rgb(145, 145, 145)" />

                    }
                  </View>
                  <View style={{ display: 'flex', width: "95%", flexDirection: 'column' }}>
                    <Text style={{ alignSelf: 'flex-start' }}>{ myFile.name }</Text>
                    <Text style={{ alignSelf: 'flex-end' }}>{ `${myFile.size} байт` }</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })
      }

      {
        !checkboxesVisible ?
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', position: "fixed", height: 150, left: 0, top: "calc(100% - 150px)", right: 0, backgroundColor: "rgb(255, 255, 255)" }}>
            <TouchableOpacity onPress={() => {
              console.log(`перемещаю файл`)
            }}>
              <MaterialCommunityIcons name="folder-move" size={48} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log(`Копирую файл`)
            }}>
              <Ionicons name="copy-sharp" size={48} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log(`информация о файле`)
              showToast()
            }}>
              <Ionicons name="information-circle" size={48} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log(`Делюсь файлом`)
            }}>
              <Entypo name="share" size={48} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              console.log(`Удаляю файл`)
            }}>
              <MaterialCommunityIcons name="bucket" size={48} color="black" />
            </TouchableOpacity>
          </View>
        :
          <Text></Text>
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
