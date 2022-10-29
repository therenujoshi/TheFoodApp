import {React, useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image , FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultsShow = ({navigation})=>{
    const [result, setResult] = useState(null);
    const id=navigation.getParam('id');
    const getResult = async (id)=>{
       const response = await yelp.get(`/${id}`);
       setResult(response.data);
    };

    useEffect(()=>{
        getResult(id);
    },[])

    if(!result){
        return null;
    }
    return (
      <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({item})=>{
                return <Image source={{uri:item}}/>
            }}
        />
      </View>
    );
}


export default ResultsShow;