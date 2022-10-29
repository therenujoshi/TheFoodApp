import {React} from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation})=>{
  if(!results.length){
    return null;
  }

    return <View>
      <Text>{title}</Text>
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        data= {results}
        keyExtractor={(result)=>{result.id}}
        renderItem={({item})=>{ 
            return (
                <TouchableOpacity onPress={()=>navigation.navigate('ShowResults', {id:item.id})}>
                  <ResultDetail result={item}/>
                </TouchableOpacity>);
        }}
      />
    </View>;
};

export default withNavigation(ResultsList);