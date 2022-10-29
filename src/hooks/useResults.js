import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default ()=>{
    //add code we need to make a request to api
    //at bottom we are going to return some variables that we are going to make available to SearchScreen component 
    const [results, setResults]= useState([]); //new piece of state
    const [errorMessage, setErrorMessage] = useState('');
    const searchApi= async(searchTerm)=>{
        try{
            const response= await yelp.get('/search', {
                
        //use promises bcoz async req like-> yelp.get('/search).then..... 
        //or use async() and await like in this searchApi().
                params: {
                    limit : 30,
                    term : searchTerm,
                    location: 'san jose'
                }
               });
               setResults(response.data.businesses);
        } catch(err){
            setErrorMessage('Something went wrong!') 
        }
       
    };
    
useEffect(()=>{
    searchApi('pasta');
}, []);


return [searchApi, results, errorMessage];
}