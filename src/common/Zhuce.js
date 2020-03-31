import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid} from 'react-native';
// import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils'
import { Actions } from 'react-native-router-flux';
let rootUrl ='https://www.fastmock.site/mock/e0d40e3f9db8eca4d6e459a3c1f54d67/api'
export default class Zhuce extends Component {
  constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            iszhuceing:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    zhuce = ()=>{
        // myFetch.get('/topics',{limit:4,user:'sss'})
        //     .then(res=>console.log(res))
        this.setState({iszhuceing:true})
        myFetch.post('/zhuce',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                  if(res.data.token=='222'){
                    ToastAndroid.show(res.data.tips,10);
                  }else if(res.data.token=='111'){
                    ToastAndroid.show('注册成功',10);
                    this.setState({iszhuceing:false})
                    Actions.login();
                  }
                })
        })
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
              onPress={this.zhuce}>
              <Text>点击注册</Text>
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
              onPress={()=>{Actions.login()}}>
              <Text>返回登录页</Text>
          </TouchableOpacity>
        </View>
        {
            this.state.iszhuceing
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
              <Text>注册成功！</Text>
            </View>
            :null
        }
      </View>
    );
  }
}