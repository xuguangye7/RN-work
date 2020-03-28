import React, { Component } from 'react';
import Button from 'react-native-button';
import {View,Text,StyleSheet,ToastAndroid,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
export default class Fabu extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            page:1,
            one:'已回复',
            two:'待回复'
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=12&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })      
    }
    componentDidUpdate(preProps,prevState){
        if(this.state.page != prevState.page){
            fetch('https://cnodejs.org/api/v1/topics?limit=12&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    lastPage = ()=>{
        var page = this.state.page;
        if(page>1){
            page --;
            this.setState({
                page:page
            })
        }else{
            ToastAndroid.show('已经是第一页了！', ToastAndroid.TOP);
        }
    }
    nextPage = ()=>{
        var page = this.state.page;
        page ++;
        this.setState({
            page:page
        })
    }
    render(){
        return(
            <View>
                <View style={styles.herder}>
                    <Icon 
                        name='chevron-left'
                        size={15}
                        color={'white'}
                        style={{marginLeft:15,marginTop:15}}
                        onPress={()=>Actions.user()}
                    />
                    <Text style={{color:'white',fontSize:18,marginTop:10,marginLeft:170}}>我的发布</Text>
                    <Text style={{color:'white',fontSize:30,marginLeft:165,marginTop:-10}}>...</Text>
                </View>
                {
                    this.state.data.map((item)=>(
                        <View style={{flexDirection:'row',backgroundColor:'white',paddingTop:15}}>
                            <Text style={{width:310,marginLeft:10,fontSize:16,marginTop:10,}}>{item.title.length<15?item.title:item.title.substr(0,15)+'...'}</Text>
                            <Text style={{fontSize:16,marginTop:10}}>{item.create_at.substr(0,10)}</Text>
                            <Text style={{fontSize:16,marginTop:10,marginLeft:20}}>{Math.round(Math.random())==0?this.state.one:this.state.two}</Text>
                        </View>
                    ))
                }
                <View style={{flexDirection:'row',height:100,backgroundColor:"#fff"}}>
                    <Button style={styles.button} onPress={()=>this.lastPage()}>上一页</Button>
                    <Text style={styles.page}>第{this.state.page}页</Text>
                    <Button style={styles.button1} onPress={()=>this.nextPage()}>下一页</Button>
                </View>
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    herder:{
        backgroundColor:'red',
        height:45,
        flexDirection:'row'
    },
    button:{
        width:80,
        height:25,
        backgroundColor:'red',
        color:'white',
        borderRadius:20,
        marginLeft:40,
        marginTop:40
    },
    page:{
        marginTop:40,
        marginLeft:100,
        fontSize:18
    },
    button1:{
        width:80,
        height:25,
        backgroundColor:'red',
        color:'white',
        borderRadius:20,
        marginLeft:90,
        marginTop:40
    }
})