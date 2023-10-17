import {AsyncStorage} from 'react-native';
import {useState, useEffect} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

function App(){
          const [count, setCount] = useState(0);
          const [dispText, setDispText] = useState('');

   useEffect(() => {
         setDispText('USE EFFECT - The count is : ' + count);

   }, [count]);

   return(

    <View style={styles.container}>
       <View style={styles.buttons}>
       
       </View>

       <View style={styles.buttons}>
          <Button  
               onPress={() => setCount(count + 1)}
               title='Increment Button'
               />
       </View>

        <Text style={styles.textDisp}>Count: {count}</Text>



       <Text style={styles.textDisp}>{dispText}</Text>

       <Text>

       </Text>


       <Text>
        
       </Text>


       <View style={styles.buttons}>
          <Button  
               onPress={() => setCount(count )}
               title='Click for next screen'
               />
       </View>


    </View>
   );
}


const styles = StyleSheet.create({
     container: {
               flex: 1,
               padding: 10,
     },

     buttons: {
               margin: 5,
               padding: 5,
               color: 'green',
     },

     textDisp: {
               fontSize: 18,
               fontWeight: 'bold',
     },





});

export default App;
