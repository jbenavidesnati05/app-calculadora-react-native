import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  // definir las variables de estado de componente 
  const[valor1,     setValor1]    = useState('');
  const[valor2,     setValor2]    = useState('');
  const[resultado,  setResultado] = useState(0);
  const[esValido,   setEsValido]    = useState(false);
  const[mensaje,    setMensaje]   = useState('');

  // definir los metodos del componete 

  let calcular = (operador)=>{
    if(valor1 != "" && valor2!=""){
      setEsValido(true)
      setMensaje("Calcula realizado completamente")

      let result = 0;
      switch(operador){
        case "+":
          result = parseFloat(valor1)+parseFloat(valor2);
          break;
        case "-":
          result = parseFloat(valor1)-parseFloat(valor2);
          break;
        case "*":
          result = parseFloat(valor1)*parseFloat(valor2);
          break;
        case "/":
          result = parseFloat(valor1)/parseFloat(valor2);
          break;
        case "**":
          result = parseFloat(Math.pow(valor1,valor2));
          break;
      }
      setResultado(result)
      
    }else{
      setEsValido(false)
      setMensaje("Debe ingresar los dos valores ")

    }

  }

  // function limpiar(){
  //   valor1 = ""
  //   valor1 = ""
  // }

  return (
    <View style={[styles.container,{flex:1}]}>

      <View style={[styles.container,styles.views,{flex:1, backgroundColor:'powderblue', }]}>
        <Banner name="calcular1" title="asdasd"></Banner>
      </View>
      
      <View style={[styles.views,styles.container,{flex:5, backgroundColor:'yellowgreen', }]}>
        <Text>Calculadora Basica</Text>

        <TextInput
          placeholder='Ingrese valor 1' 
          style= {styles.inputs}
          onChangeText={valor1 => setValor1(valor1)}
          value = {valor1}
        ></TextInput>
        
        <TextInput
          placeholder='Ingrese valor 2' 
          style= {styles.inputs}
          onChangeText={valor2 => setValor2(valor2)}
          value = {valor2}
        ></TextInput>

        <Text style ={{color:'blue', fontWeight:'bold'}}>Resultado</Text>
        <Text style ={{color:'blue', fontWeight:'bold',borderRadius:10,
          padding:10,
          width:100,
          borderColor:'blue',
          textAlign:'center'}}
          >{resultado.toFixed(2)}</Text>

        <View style={{flexDirection:'row', marginTop:20}}>

          <TouchableOpacity style={styles.button}
          onPress = {()=>calcular("+")}
          >
            <Text style={styles.textTouchable}>Sumar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress = {()=>calcular("-")}
          >
            <Text style={styles.textTouchable}>Restar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress = {()=>calcular("*")}
          >
            <Text style={styles.textTouchable}>Multiplicar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}
          onPress = {()=>calcular("/")}
          >
            <Text style={styles.textTouchable}>Dividir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
          onPress = {()=>calcular("**")}
          >
            <Text style={styles.textTouchable}>Exponente</Text>
          </TouchableOpacity>

        </View>
          <TouchableOpacity style={styles.button}
          onPress = {()=>{
            setValor1('')
            setValor2('')
            setResultado(0)
            setMensaje("")
          }}
          >
              <Text style={styles.textTouchable}>Limpiar</Text>
          </TouchableOpacity>
        <View>
        <View>
          <Text style={{color:esValido?"green":"red"}}>{mensaje}</Text>
        </View>

        </View>

      </View>

      <View style={[styles.container,styles.views,{flex:1, backgroundColor:'gray', }]}>
      <Text>derechos reservados</Text>
      </View>
    

    </View>
  );
}

//CREAR COMPONENTE PARA LA IMAGEN
function Banner(props){
  return(
   <Image source={require(`./assets/images/${props.name}.png`)} style={{width:'100%',height:'100%', resizeMode:'stretch'}}></Image>

  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  views:{
    width:'100%', 
    height:'100%', 
    borderColor:'black', 
    borderWidth:2, 
    borderRadius:5
    
  },

  inputs:{
    borderRadius:10,
    padding:10,
    width:100,
    borderColor:'blue',
    textAlign:'center'
  },
  button:{
    backgroundColor:'white',
    borderRadius:10,padding:10,
    margin : 10
  },
  textTouchable:{
    fontFamily:'bold',
  }


});
