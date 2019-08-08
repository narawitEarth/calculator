import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class FacebookButton extends React.Component {
  
  constructor(props)
  {
    super(props)
      this.state = {
         num1: "",
         num2: "",
         sum: "",
         pm: "",//plus minus x 
         check:0,
         clear: "",

      }
  }

numPress(e)
{
  if(this.state.check==0)
  {
    var tmp1 = this.state.num1+e;
    this.setState({num1:tmp1});
  }
  
  if(this.state.check==1)
  {
    var tmp2 = this.state.num2+e;
    this.setState({num2:tmp2});
  }
  var tmp = this.state.sum+e;
  this.setState({sum:tmp});

}

clear()
{
  var x = 0;
  this.setState({check:x});
  this.setState({sum:this.state.clear});
  this.setState({num1:this.state.clear});
  this.setState({num2:this.state.clear});
  this.setState({pm:this.state.clear});
}
  
btnPress(e)
{
  var x = 1;
  this.setState({pm:e});
  this.setState({check:x});
  var tmp = this.state.sum+e;
  this.setState({sum:tmp});

}

sum()
{
  var total=0;
  var left = Number(this.state.num1);
  var right = Number(this.state.num2);
  if(this.state.pm =='+')
  {
    total = left+right

  }
  if(this.state.pm == 'x')
  {
    total = left*right

  }
  if(this.state.pm=='-')
  {
    total = left-right

  }
  if(this.state.pm == '÷')
  {
    total = left/right
  }
  this.setState({num1:total});
  this.setState({sum:total});
  this.setState({num2:this.state.clear});
}




  render() {
    return (
    <LinearGradient colors={['#00F260', '#0575E6']} style={{flex: 1}} >
     <View style={{flex: 1, backgroundColor: 'black'}}>
           <View style={{flex: 1,}}>
           </View>
          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} />
              <Text style={styles.txt3}>{this.state.sum} </Text>
          </View>
      
     </View> 
     <View style={{ flex: 2, flexDirection: 'column' }}>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn} 
            onPress={()=>this.clear()}><Text style={styles.txt1}>AC</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txt1}>+/-</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn}><Text style={styles.txt1}>%</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn4}
            onPress={()=>this.btnPress('÷')} ><Text style={styles.txt2}>÷</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2} 
            onPress={()=>this.numPress('7')}><Text style={styles.txt2}>
            7
           </Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('8')}><Text style={styles.txt2}>
            8
            </Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('9')}><Text style={styles.txt2}>
            9</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn4}
            onPress={()=>this.btnPress('x')}><Text style={styles.txt2}>x</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('4')}><Text style={styles.txt2}>4</Text></TouchableOpacity>
          </View>
         <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('5')}><Text style={styles.txt2}>5</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('6')}><Text style={styles.txt2}>6</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn4}
            onPress={()=>this.btnPress('-')}><Text style={styles.txt2}>-</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('1')}><Text style={styles.txt2}>1</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('2')}><Text style={styles.txt2}>2</Text></TouchableOpacity>
          </View>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('3')}><Text style={styles.txt2}>3</Text></TouchableOpacity>
          </View>
           <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn4}
            onPress={()=>this.btnPress('+')}><Text style={styles.txt2}>+</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'row' }}>
          <View style={{flex: 2, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn3}
            onPress={()=>this.numPress('0')}><Text style={styles.txt4}> 0</Text></TouchableOpacity>
          </View>
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn2}
            onPress={()=>this.numPress('.')}><Text style={styles.txt2}>.</Text></TouchableOpacity>
          </View>
          <View style={{flex: 1, backgroundColor: 'black'}}>
            <TouchableOpacity style={styles.btn4}
            onPress={()=>this.sum()}><Text style={styles.txt2}>=</Text></TouchableOpacity>
          </View>
        </View>
      </View>     
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  btn:  {
    alignItems: 'center',
    height:60,
    width:60,
    backgroundColor: '#BDBBBA',
   padding: 10,
    margin:10,
    borderRadius: 50,


  },

   btn2:  {
    alignItems: 'center',
    height:60,
    width:60,
    backgroundColor: '#5B5958',
    padding: 10,
    margin:10,
    borderRadius: 50,

  },

   btn3:  {
    height:60,
    width:140,
    backgroundColor: '#5B5958',
    padding: 10,
    margin:10,
    borderRadius: 50,

  },

  btn4:  {
    alignItems: 'center',
    height:60,
    width:60,
    backgroundColor: '#EC8246',
    padding: 10,
    margin:10,
    borderRadius: 50,

  },
 
   txt2:{
    textAlign:'center',
    color:"#ffffff",
    fontSize: 30
  },

   txt4:{
    textAlign:'left',
    color:"#ffffff",
    fontSize: 30
  },

  txt3:{
    color:"#ffffff",
    padding:10,
    fontSize: 85
  },

  txt1:{
    textAlign:'center',
    color: "black",
    fontSize: 30
    
  },


})