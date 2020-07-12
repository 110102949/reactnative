import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const Template = (props) => {
  return (
    <View style={styles.frame}>
      <View style={styles.key}>
        <Text style={styles.titletext}>{props.title}</Text>
      </View>

      <View style={styles.value}>
        <Text style={styles.valuetext}>{props.value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: width,
    height:50,
    flexDirection: 'row',
  },
  key: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor:'#EBECF0',
    alignItems:'center'
  },
  value: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor:'white',
    margin:1,
    alignItems:'center'
    
  },

  titletext:
  {

    color:'gray'



  }
});

export default Template;
