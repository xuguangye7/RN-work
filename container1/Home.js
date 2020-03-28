import React, { Component } from 'react'
import {StyleSheet,Dimensions ,View,Button,Text,Image,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Home extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection:'row',
                    height:60,
                    borderColor:"#fff",
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'red',
                }}>
                    <View style={{
                        width:'80%',
                        height:"70%",
                        flexDirection:'row',
                        marginLeft:-10,
                        marginRight:10,
                        borderColor:'#000',
                        color:'#b8b8b8',
                        alignItems:'center',
                        // justifyContent:'center',
                        backgroundColor:"#fbb8b8",
                        borderRadius:20,
                    }}>
                        <Image style={{width:30,height:30,marginLeft:20}}  source={require('../assets/icon/search.png')}/>
                        <TextInput style={{color:"#fff"}} placeholder="请输入您要搜索的关键字"/> 
                    </View>
                    <Icon color="#fff" size={30} name="shopping-cart"/>
                </View>
                <Image style={{width:"100%",height:200}}  source={require('../assets/icon/01.png')}/>
                <View style={{
                    backgroundColor:"#f5f5f5",
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <View style={styles.one}>
                        <Image style={{height:"100%"}}  source={require('../assets/icon/02.png')}/>
                        <Text style={{
                            alignItems:'center',
                            justifyContent:'center',
                            fontSize:16,
                            lineHeight:80,
                            marginLeft:10
                        }}>居家维护修养</Text>
                        <Text style={styles.three}>></Text>
                    </View>
                    <View style={styles.one}>
                        <Image style={{height:"100%"}}  source={require('../assets/icon/03.png')}/>
                        <Text style={styles.two}>住宿优惠</Text>
                        <Text style={styles.three1}>></Text>
                    </View>
                    <View style={styles.one}>
                        <Image style={{height:"100%"}}  source={require('../assets/icon/04.png')}/>
                        <Text style={styles.two}>出行接送</Text>
                        <Text style={styles.three1}>></Text>
                    </View>
                    <View style={styles.one}>
                        <Image style={{height:"100%"}}  source={require('../assets/icon/05.png')}/>
                        <Text style={styles.two}>E族活动</Text>
                        <Text style={styles.three1}>></Text>
                    </View>     
                </View>
                <View style={styles.four}>
                    <Text style={{color:"#fff",fontSize:16}}>E族活动</Text>
                </View>
                <View style={styles.five}>
                    <Text style={{color:"#767676",fontSize:16}}>@E族之家，版权所有</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  one:{
      marginTop:10,
      width:"100%",
      height:80,
      flexDirection:'row',
      backgroundColor:"#fff"
  },
  two:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:16,
    lineHeight:80
  },
  three:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:30,
    color:"#dddddd",
    marginLeft:220,
    lineHeight:80
  },
  three1:{
    alignItems:'center',
    justifyContent:'center',
    fontSize:30,
    color:"#dddddd",
    marginLeft:250,
    lineHeight:80
  },
  four:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"red",
    width:"80%",
    borderRadius:10,
    height:50 ,
    marginTop:30,
    marginLeft:"10%"
  },
  five:{
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:"red",
    width:"80%",
    borderRadius:10,
    height:50 ,
    marginTop:30,
    marginLeft:"10%"
  }
});

