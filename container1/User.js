import React, { Component } from 'react'
import {View,TouchableOpacity,Image,TouchableHighlight,Dimensions ,FlatList,StyleSheet,Text, ImageBackground, AsyncStorage} from 'react-native'
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Actions} from 'react-native-router-flux';
import fabu from './Fabu';
const {width} = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class User extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:require('../assets/icon/001.png')
        }
    }
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width:300,
            height:400,
            cropping:true,

        }).then(image=>{
            console.log(image.path)
            AsyncStorage.setItem('image',image.path);
            AsyncStorage.getItem('image').then((res)=>{
                this.setState({imageUrl:{uri:res}})
            })
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.one}>  
                    <ImageBackground style={{width:100,height:100,marginTop:30,backgroundColor:'#fff',borderRadius:50,overflow:'hidden' }}>
                        <TouchableHighlight
                            onPress={()=>{this.takephoto()}}
                        >
                        <View>
                            <Image 
                                style={{width:100,height:100}} 
                                source={this.state.imageUrl}
                            />
                        </View>
                        </TouchableHighlight>
                    </ImageBackground>
                    <Text style={styles.two}>BINNU   DHILION</Text>
                </View>
                <View style={{width:"100%",height:50,flexDirection:'row',alignItems:"center",backgroundColor:"#ffffff"}}>
                    <Text style={{marginLeft:12}}></Text>
                    <Icon color="#c3c3c3" size={30} name="user"/>
                    <Text style={{color:"#4f4e4e",marginLeft:12}}>我的个人中心</Text>
                </View>
                <View style={{height:1,backgroundColor:"#c3c3c3"}}></View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="gear"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>账户管理</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="map-marker"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>收获地址</Text>
                    </View>
                    <View style={styles.four}>
                    <Icon color="#c3c3c3" size={30} name="id-card"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的信息</Text>
                    </View>
                </View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="wpforms"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的订单</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="qrcode"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的二维码</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="database"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的积分</Text>
                    </View>
                </View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="star-o"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的收藏</Text>
                    </View>
                    <View style={styles.four}>
                    </View>
                    <View style={styles.four}>
                    </View>
                </View>
                <View style={{height:5,backgroundColor:"#c3c3c3"}}></View>
                <View style={{width:"100%",height:50,flexDirection:'row',alignItems:"center",backgroundColor:"#ffffff"}}>
                    <Text style={{marginLeft:12}}></Text>
                    <Icon color="#c3c3c3" size={30} name="external-link"/>
                    <Text style={{color:"#4f4e4e",marginLeft:12}}>E族中心</Text>
                </View>
                <View style={{height:1,backgroundColor:"#c3c3c3"}}></View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="wrench"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>居家维护修养</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="car"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>出行接送</Text>
                    </View>
                    <View style={styles.four}>
                    <Icon color="#c3c3c3" size={30} name="user"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的受赠</Text>
                    </View>
                </View>
                <View style={styles.three}>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="binoculars"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="fa"/>
                        <Text style={{color:"#4f4e4e",marginLeft:12}}>我的活动</Text>
                    </View>
                    <View style={styles.four}>
                        <Icon color="#c3c3c3" size={30} name="file-pdf-o"/>
                        <Button onPress={()=>{Actions.fabu()}}  style={{fontSize:14,color:"#4f4e4e",marginLeft:12}}>我的发布</Button>
                    </View>
                </View>
                <View style={styles.five}>
                    <Button onPress={()=>{Actions.login()}} style={{color:"#3f3f3f"}}>BINNU DHILION | 退出</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    one:{
        width:"100%",
        height:200,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor:"#f23030"
    },
    two:{
        fontSize:16,
        color:"#fff"
    },
    three:{
        width:"100%",
        height:80,
        backgroundColor:"#ffffff",
        
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    four:{
        width:width*0.333,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ffffff"
    },
    five:{
        backgroundColor:"#eeeeee",
        alignItems:'center',
        justifyContent:'center',
        width:"80%",
        borderRadius:10,
        height:50 ,
        // marginTop:30,
        marginLeft:"10%"
    },
    btn:{
        width:100,height:100,backgroundColor:"#fff",marginTop:30,borderRadius:50,overflow:'hidden'
    }
  });
  
  