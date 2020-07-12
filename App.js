/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';


const{width,height}=Dimensions.get('window');




const App=props=>
{



const[text,settext]=useState("");
const[loading,setloading]=useState(false);




  const Inputwatcher=(txt)=>
  {
    settext(txt)

  }


  const postdata=async ()=>
  {

   if(text.length>0)
   {
    setloading(true)



    try
    {


      let response = await fetch('https://restcountries.eu/rest/v2/name/'+text);

      let data= await response.json();


      console.log(data)


      setloading(false)


      if(response.status===200)
      {

        props.navigation.navigate('Detailpage',{Detaildata:data})



        console.log("data",data);

      }else
      {


        console.log("data",data);
      }





    }
    catch(e)
    {


      setloading(false)


      console.log(e);

    }




   }
    


    




  }




  return(


   <View style={styles.container}>


   


    <TextInput placeholder="Enter Country" style={[styles.input]}   onChangeText={Inputwatcher}></TextInput>

    <TouchableOpacity  disabled={text.length>1?false:true} onPress={()=>postdata()} style={[styles.submit_btn,{backgroundColor:text?'blue':'gray'}]}>
    <Text style={styles.submit_btn_txt}>
      Submit
    </Text>

    </TouchableOpacity>

{loading?<ActivityIndicator color="blue" size='large' style={{position:'absolute',top:height/2-25,left:width/2-25}} color='black'></ActivityIndicator>:null}


  

    </View>





  );

}



const styles=StyleSheet.create({

  container:
  {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:
  {
    width:width*0.8,
    alignSelf:'center',
    borderRadius:5,
    borderWidth:1,
    padding:16,
   
  },
  submit_btn:
  {
    width:width*0.8,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:32,
    borderRadius:5,

  },
  submit_btn_txt:
  {
    color:'white',
    fontWeight:'bold'
  },
  header:
  {

    width:width,
    height:height/9.5,
    backgroundColor:'white',
    position:'absolute',
    top:0,
    justifyContent:'center',
    alignItems:'center',



  },
  headertxt:
  {

    fontSize:20,
    color:'black',
    marginTop:20

   
  }


});


export default App;
