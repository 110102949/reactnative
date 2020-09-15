import React, {useState} from 'react';

import {SvgUri} from 'react-native-svg';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native-gesture-handler';
import Template from './Keyvaluetemplate';
const {width, height} = Dimensions.get('window');

const DetailPage = (props) => {
  const api = 'f825fc17d388f8c24696ab2eec3ae3b7';

  const [weather, setweather] = useState([]);

  const [duplicateindex, setindex] = useState([]);


 let data = props.route.params.Detaildata;


 console.log(data)
  const weatherdata = async (data, index) => {
  
  if(data.length>0)
  {
    try {
      let value = await fetch(
        'http://api.weatherstack.com/current?access_key=' +
          api +
          '&query=' +
          data.toUpperCase(),
      );

      if (value.status === 200) {
        let responsedata = await value.json();

        responsedata.position = index;


        setindex(index)


//        arr.filter((v,i,a)=>a.findIndex(t=>(t.x === v.x && t.y===v.y))===i)

setweather((weather) => [...weather, responsedata]);




       





       

      



      }
    } catch (e) {
      console.log(e);

    }
  }

  
  };

  childitem = ({item, index}) => {
    console.log('data_item', item);
    return (
      <View style={{backgroundColor: 'white', width: width, margin: 2}}>



       
        <SvgUri
          width={150}
          height={150}
          uri={item.flag}
          style={{alignItems: 'center', alignSelf: 'center'}}></SvgUri>
  {/* {
            duplicateindex.includes(index)? console.log("FALSE"):console.log("TRUE")
          } */}


          <TouchableOpacity
          style={{
            width: width * 0.9,
            height: 50,
            backgroundColor: 'blue',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 16,
          }}
          onPress={() => weatherdata(item.capital.toUpperCase(), index)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Capital Weather
          </Text>
        </TouchableOpacity>

   
      





{

weather.filter((v,i,a)=>a.findIndex(t=>(t.position === v.position ))===i).map((item,mapindex)=>
  (
    item.position===index?  (
      <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center',margin:8}}>  
    {  console.log('uyy', item.current.weather_icons[0])}

<Image source={{uri:'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png'}}  resizeMode={'cover'} style={{width:50,height:50,backgroundColor:'pink'}} ></Image>

<Text
    style={{
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 8,
      marginBottom: 8,
    }}>
    Temparature :{item.current.temperature}, Wind Speed :
    {item.current.pressure}, Precepiration :
    {item.current.precip}
  </Text>

  </View>
    ):null

    
  ))
}



        

        <Template title="Capital" value={item.capital}></Template>

        <Template title="Population" value={item.population}></Template>

        <Template title="Latitude" value={item.latlng[0]}></Template>
        <Template title="Longitude" value={item.latlng[1]}></Template>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={childitem}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailPage;
