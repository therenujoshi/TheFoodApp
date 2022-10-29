import {React, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';


const SearchScreen = ()=>{
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    //SHIFTED TO useResults HOOK
    // const [results, setResults]= useState([]); //new piece of state
    // const [errorMessage, setErrorMessage] = useState('');
//     const searchApi= async()=>{
//         try{
//             const response= await yelp.get('/search', {
                
//         //use promises bcoz async req like-> yelp.get('/search).then..... 
//         //or use async() and await like in this searchApi().
//                 params: {
//                     limit : 20,
//                     term : term,
//                     location: 'san jose'
//                 }
//                });
//                setResults(response.data.businesses);
//         } catch(err){
//             setErrorMessage('Something went wrong!') 
//         }
       
//     };

// useEffect(()=>{
//     searchApi('pasta');
// }, []);

  const filterResultsByPrice=(price)=>{
    //proce === '$', $$, $$$
    return results.filter(result=>{
        return result.price===price;
    });
  }


   return (<View style={{flex:1}}>
                <SearchBar term={term} 
                    onTermChange={(newTerm)=>{setTerm(newTerm)}}
                    onTermSubmit={ ()=>searchApi(term) }
                    />
                {errorMessage ? <Text>{errorMessage}</Text>: null}
                <ScrollView>
                  <ResultsList results = {filterResultsByPrice('$')}  title='Cost Effective' />
                  <ResultsList results = {filterResultsByPrice('$$')}  title = "Bit Pricier"/>
                  <ResultsList results = {filterResultsByPrice('$$$')}  title = "Big Spender"/>
                </ScrollView> 
        
          </View>
        );


};

const styles = StyleSheet.create({});

export default SearchScreen;