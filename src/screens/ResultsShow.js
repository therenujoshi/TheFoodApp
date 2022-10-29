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
                return <Image style={styles.image} source={{uri:item}}/>
            }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    image:{
        height: 300,
        width: 300
    }
});

export default ResultsShow;