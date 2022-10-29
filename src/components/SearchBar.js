import {React} from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmit})=>{
    return <View >
                <Feather name='search'/>
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Search' 
                    style={styles.inputStyle}
                    value={term}
                    onChangeText={newTerm=>{onTermChange(newTerm)}} //or {onTermChange}
                    onEndEditing={onTermSubmit}
                    />
    </View>;


};



export default SearchBar;