import React, { Component } from 'react'
import {StyleSheet,View,TextInput,ScrollView,TouchableOpacity,Text,Image} from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox,Modal, Overlay} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
    txt:{
      textAlign:"center",
      lineHeight:100,
      fontSize:20,
      color:"#b7aeae"
    },
    txt1:{
      textAlign:"center",
      fontSize:12,
      color:"#b7aeae",
      marginTop:10
    },
    txt2:{
      // textAlign:"center",
      fontSize:12,
      color:"red",
      marginLeft:20,
      marginTop:10
    },
    box:{
      width:"20%",
      height:100
    },
    box1:{
      width:"47%",
      height:280,
      backgroundColor:"#fff",
      marginTop:10
    }
  });
export default class Shangpin extends Component {
    render() {
        return (
            <View>
            
            <View style={{
                flexDirection:'row',
                height:60,
                // borderColor:"#fff",
                borderButtomColor:"red",
                // marginTop:20,
                backgroundColor:"#fff",
                alignItems:'center',
                justifyContent:'center',
            }}>
                <View style={{
                width:'80%',
                height:40,
                flexDirection:'row',
                marginRight:10,
                borderColor:'#000',
                color:'#b8b8b8',
                alignItems:'center',
                backgroundColor:"#eeeeee",
                borderRadius:2,
                }}>
                <TextInput placeholder="请输入商品名称"/>
                <Image style={{width:20,height:20,marginLeft:220}} source={require('../assets/icon/search.png')}/>
                </View>
            </View>
            <ScrollView>
            <View style={{
                height:100,
                backgroundColor:"#fff"
            }}>
                <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems:'center',
                flexWrap:'wrap'
                }}>
                <View style={styles.box}>
                    <Text style={styles.txt}>综合</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txt}>销量</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txt}>新品</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txt}>价格</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.txt}>信用</Text>
                </View>
                </View>
            </View>
            <View style={{
                height:900,
                backgroundColor:"#f4f4f4"
            }}>
                <View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems:'center',
                flexWrap:'wrap'
                }}>
                <View style={styles.box1}>
                    <Image style={{width:"100%",height:200}} source={require('../assets/icon/pic4.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                    <Image style={{width:"90%",height:200}} source={require('../assets/icon/pic7.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                    <Image style={{width:"100%",height:200}} source={require('../assets/icon/pic4.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                    <Image style={{width:"90%",height:200}} source={require('../assets/icon/pic7.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                    <Image style={{width:"100%",height:200}} source={require('../assets/icon/pic4.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                <View style={styles.box1}>
                    <Image style={{width:"90%",height:200}} source={require('../assets/icon/pic7.png')}/>
                    <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={styles.txt2}>36.00</Text>
                </View>
                </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}






