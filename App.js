import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import Shop from './container1/Shop';
import Home from './container1/Home';
import Shangpin from './container1/Shangpin';
import User from './container1/User';
import Fabu from './container1/Fabu';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Zhuce from './src/common/Zhuce';
console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/e0d40e3f9db8eca4d6e459a3c1f54d67/api';

const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
	// 实现 Tabs
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
  }
  if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
      <Overlay>
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
            <Scene>
              <Tabs 
                key="tabbar" 
                hideNavBar
                activeTintColor="red" 
                inactiveTintColor='#989898'
                tabBarStyle={{backgroundColor:"#fff"}}
              >
                
                {/*Home*/}
                <Scene key="homePage" 
                 hideNavBar
                  title="首页" 
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="home"/>
                  }
                >
                  <Scene key="home" component={Home} />
                  
                </Scene>
                {/*商品*/}
                <Scene key="商品分类" 
                hideNavBar
                //   title="商品分类" 
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="th-large"/>
                  }
                >
                  <Scene key="shangpin" component={Shangpin} />
                </Scene>
                {/*购物车*/}
                <Scene key="购物车"
                hideNavBar
                //   title="购物车"
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="shopping-cart"/>
                  }
                >
                  <Scene key="shop" component={Shop}/>
                </Scene>
                {/*个人中心*/}
                <Scene key="个人中心"
                hideNavBar
                  // title="个人中心"
                  backgroundColor='red'
                  icon={
                    ({focused})=><Icon  size={30} color={focused ? 'red' : '#989898'} name="user"/>
                  }
                >
                  <Scene key="user" component={User}/>
                  <Scene
                    key="fabu" 
                    component={Fabu}
                  />
                </Scene>
              </Tabs>
            </Scene> 
          
        </Lightbox>
        <Scene initial={!isLogin} key='login' component={Login}/>
        <Scene key='zhuce' component={Zhuce}/>
      </Modal>
      </Overlay>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
