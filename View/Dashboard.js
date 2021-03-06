import React from 'react'
import {
View,
Text,
FlatList,
StyleSheet,
Image,
TouchableOpacity,
Alert
} from 'react-native'



const Dashboard = () => {
    return (
        <View style = {style.container}>
            <View style={style.topView}>
                <Text style = {style.textDashboard}> Dashboard </Text>
            </View>
            <View style = {style.bottomView}>
                <View style = {style.headercardView}>
                    <Image source = {require ('../Images/react-native.gif')} style = {style.gifStyle}/>
                </View>
                <FlatList style = {style.flatListStyle}
                          contentContainerStyle = {{paddingBottom : 64}}
                          showsVerticalScrollIndicator = {false}
                          data = {CardData}
                          renderItem = {
                            ({item}) => <DashboardCards icon = {item.icon} name = {item.name}/>
                        }
                        keyExtractor={(item, index) => index.toString()}>

                        </FlatList>

            </View>
        </View>
    );
}

const CardData = [
    {'icon' : require ('../Images/ic_Profile.png'), 'name' : 'PROFILE'},
    {'icon' : require ('../Images/ic_Cart.png'), 'name' : 'CART'},
    {'icon' : require ('../Images/ic_Orders.png'), 'name' : 'ORDERS'},
    {'icon' : require ('../Images/ic_About.png'), 'name' : 'ABOUT'},
    {'icon' : require ('../Images/ic_Settings.png'), 'name' : 'SETTINGS'}
]

const DashboardCards = (props) => {
    
    const OnClickMenuItems = (item) => {
        
    }

    return (
        <View>
        <TouchableOpacity style = {style.cardStyle} onPress = {OnClickMenuItems (props.name)}>
            <Image source = {props.icon} style = {style.cardImageStyle}/>
            <Text style = {style.cardTitleStyle}>{props.name}</Text>
        </TouchableOpacity>
        </View>
    );
}

const style =  StyleSheet.create ({
container : {
    height : '100%'
},
topView : {
    backgroundColor : '#d3408d',
    flex : 0.3
},
bottomView : {
    backgroundColor : '#232847',
    flex : 0.7
},
headercardView : {
    marginLeft : 40,
    marginRight : 40,
    borderRadius : 10,
    marginTop : - 100,
    height : 200,
    backgroundColor : 'white',
    overflow : 'hidden'
},
gifStyle : {
    height : '100%',
    width : '100%'
},
textDashboard : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 40,
    textAlign : 'center',
    marginLeft : 40, 
    marginRight : 40,
    marginTop : 80
},
flatListStyle : {
    marginTop : 20,
    marginLeft : 40,
    marginRight : 40,
    borderRadius : 10
},
cardStyle : {
    backgroundColor : '#d3408d',
    height : 150,
    marginTop : 20,
    borderRadius : 10
},
cardImageStyle : {
    height : 90,
    width : 90,
    alignItems : 'center',
    borderRadius : 45,
    resizeMode : 'center',
    alignSelf : 'center',
    marginTop : 10
},
cardTitleStyle : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 25,
    textAlign : 'center',
    marginTop : 5
}

})

export default Dashboard;