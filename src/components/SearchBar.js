import {React} from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmit})=>{
    return <View style={styles.background}>
                <Feather name='search' style={styles.iconStyle}/>
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

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: 'row',
        marginBottom:10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;