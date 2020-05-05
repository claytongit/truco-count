import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import logo from './assets/logo.png';

export default function App() {
  const [ countOne, setCountOne ] = useState(0);
  const [ countTwo, setCountTwo ] = useState(0);

  const teamOneSum = () => {
    setCountOne( countOne + 1);    
  }

  const TeamOnesubtraction = () => {
    setCountOne( countOne - 1 );

    if(countOne === 0){
      setCountOne(0);
    }
  }

  const teamTwoSum = () => {
    setCountTwo( countTwo + 1);    
  }

  const TeamTwosubtraction = () => {
    setCountTwo( countTwo - 1 );

    if(countTwo === 0){
      setCountTwo(0);
    }
  }

  const trucoOne = () => {
    setCountOne( countOne + 3);
  }

  const trucoTwo = () => {
    setCountTwo( countTwo + 3 );
  }

  const sixOne = () => {
    setCountOne( countOne + 6 );
  }

  const sixTwo = () => {
    setCountTwo( countTwo + 6 );
  }

  const nineOne = () => {
    setCountOne( countOne + 9 );
  }

  const nineTwo = () => {
    setCountTwo( countTwo + 9 );
  }

  const twelveOne = () => {
    setCountOne( countOne + 12 );
  }

  const twelveTwo = () => {
    setCountTwo( countTwo + 12 );
  }

  if(countOne >= 12){
    alert('WIN TIME 1');
    setCountOne(0);
    setCountTwo(0);
  } 

  if(countTwo >= 12){
    alert('WIN TIME 2');
    setCountTwo(0);
    setCountOne(0);
  }

  return (
    <View style={ styles.container }>

      <Text style={ styles.copyright }>copyright © Clayton Tavares</Text>

      <Text style={ styles.title }>TRUCO COUNT</Text>

      <Image style={ styles.logo } source={ logo } />

      <View style={ styles.box }>

        <View style={ styles.boxone }>

          <Text style={ styles.time }>Time 1</Text>

          <View style={ styles.boxNumber }>
            <Text style={ styles.number }>{ countOne }</Text>
          </View>

          <View style={ styles.boxBtn }>

            <TouchableOpacity onPress={ TeamOnesubtraction } style={ styles.btn }>
              <Text style={ styles.txtBtn }>-</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ teamOneSum } style={ styles.btn }>
              <Text style={ styles.txtBtn }>+</Text>
            </TouchableOpacity>

          </View> 

          <View style={ styles.boxButton }>

            <TouchableOpacity onPress={ trucoOne } style={ styles.button }>
              <Text style={ styles.txtButton }>Truco</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ sixOne } style={ styles.button }>
              <Text style={ styles.txtButton }>6</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ nineOne } style={ styles.button }>
              <Text style={ styles.txtButton }>9</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ twelveOne } style={ styles.button }>
              <Text style={ styles.txtButton }>12</Text>
            </TouchableOpacity>

          </View>

        </View>

        <View style={ styles.boxtwo }>

          <Text style={ styles.time } >Time 2</Text>

          <View style={ styles.boxNumber }>
            <Text style={ styles.number }>{ countTwo }</Text>
          </View>

          <View style={ styles.boxBtn }>

            <TouchableOpacity onPress={ TeamTwosubtraction } style={ styles.btnR }>
              <Text style={ styles.txtBtn }>-</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={ teamTwoSum } style={ styles.btnR }>
              <Text style={ styles.txtBtn }>+</Text>
            </TouchableOpacity>

          </View> 

          <View style={ styles.boxButton }>

            <TouchableOpacity onPress={ trucoTwo } style={ styles.buttonR }>
              <Text style={ styles.txtButton }>Truco</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ sixTwo } style={ styles.buttonR }>
              <Text style={ styles.txtButton }>6</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ nineTwo } style={ styles.buttonR }>
              <Text style={ styles.txtButton }>9</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ twelveTwo } style={ styles.buttonR }>
              <Text style={ styles.txtButton }>12</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 10,  
    color: '#fff',  
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  box: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxone: {
    width: '50%',
    alignItems: 'center',
    borderRightColor: '#fff',
    borderRightWidth: 0.5,
  },
  boxtwo: {
    width: '50%',
    alignItems: 'center',
    borderLeftColor: '#fff',
    borderLeftWidth: 0.5,
  },
  time: {
    fontSize: 24,
    color: '#FFF',
  },
  boxNumber: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 24,
    color: '#fff',
  },
  boxBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#4E8BE6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  txtBtn: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  boxButton: {
    width: '80%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: '#4E8BE6',
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20,   
  },
  btnR: {
    width: 50,
    height: 50,
    backgroundColor: '#C33D20',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  buttonR: {
    width: 50,
    height: 30,
    backgroundColor: '#C33D20',
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20,   
  },
  txtButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  copyright: {
    marginTop: 30,
    fontSize: 7,
    color: '#fff',
  },
});
