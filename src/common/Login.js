import React, {Component} from 'react';
import {View, Text, Image, ActivityIndicator,ToastAndroid, TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
// import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils'
import { Actions } from 'react-native-router-flux';
let rootUrl ='https://www.fastmock.site/mock/e0d40e3f9db8eca4d6e459a3c1f54d67/api'
export default class Login extends Component {
  constructor(){
      super();
      this.state = {
          username:'',
          pwd:'',
          isloading:false
      }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      if(this.state.username != '' && this.state.pwd != ''){
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
          if(res.data.num == '1'){
            this.setState({isloading:false})
            ToastAndroid.show('账户已存在!', ToastAndroid.TOP);
          }else{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.homePage();  
                })
          }
            
        })
      }else{
        ToastAndroid.show('输入不能为空!', ToastAndroid.TOP);
      }
    } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
             <Image style={{width:30,height:30}} source={require('../../assets/icon/user.png')}/>
            {/* <Icon name="user" color="red"/> */}
            <TextInput placeholder="用户名" 
              onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
              <Image style={{width:30,height:30}} source={require('../../assets/icon/user.png')}/>
            {/* <Icon name="user" color="red"/> */}
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <TouchableOpacity 
              style={{
                  width: '80%',
                  height: 40,
                  backgroundColor: '#ccc',
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              onPress={this.login}>
              <Text>登录</Text>
      
                
          </TouchableOpacity>
          <TouchableOpacity 
              style={{
                  width: '80%',
                  height: 40,
                  backgroundColor: '#ccc',
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              onPress={()=>{Actions.zhuce()}}>
              <Text>注册 </Text>
          </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View style={{
              backgroundColor:'gray',
              width:'60%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height:50,
              borderRadius:10,
              marginLeft:"20%",
              marginTop:100
            }}>
              <Text>正在登录中</Text>
            </View>
            :null
            
        }
      </View>
    );
  }
}