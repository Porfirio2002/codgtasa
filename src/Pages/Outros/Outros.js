import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import estilo from './estilo';

const Outro = () => {
    return (
        <ScrollView>
           
        <View style={estilo.container}>
        
      <View>
           



</View>
        
      </View>

        <View style={estilo.container}>
            <Text style={estilo.titulo} >MAPA DE PICHAÇÕES</Text>
            <Image source={require('../../../assets/fotos/01.jpg')}
                    style={estilo.maps}/>
                    <Text style={estilo.texto}>RECOMPENÇAS</Text>
                    <Text style={estilo.texto}>Molotov Cocktail, AK-47, Sawed-Off Shotgun e TEC 9 são entregues na cozinha da Casa dos Johnson.</Text>
                    <Text style={estilo.texto}>Membros da Grove Street Families vão começar a carregar Desert Eagles, SMGs e facas ao invés da pistola padrão e TEC 9.</Text>
            
        </View>

        <View style={estilo.container}>
            <Text style={estilo.titulo} >MAPA DE FOTOGRAFIAS</Text>
            <Image source={require('../../../assets/fotos/02.jpg')}
                    style={estilo.maps2}/>
                    <Text style={estilo.texto}>RECOMPENÇAS</Text>
                    <Text style={estilo.texto}>Snapshots são um dos quatro itens colecionáveis, juntamente com as Tags, Horseshoes e Oysters, e, como os demais, completar todos os 50 concede ao jogador uma recompensa significativa. A recompensa por cada Snapshot obtida corretamente é de $100, perfazendo um total de $5,000 pela coleta de todos os Snapshots. A recompensa por capturar todos os 50 é também a criação de quatro tipos de armas disponíveis na Doherty Garage;: a Micro Uzi, Granadas, Pump Action Shotgun, e o Sniper Rifle, e o jogador receberá um bônus de $100,000.</Text>
                    
            
        </View>

        <View style={estilo.container}>
            <Text style={estilo.titulo} >FERRADURAS</Text>
            <Image source={require('../../../assets/fotos/03.jpg')}
                    style={estilo.maps3}/>
                    <Text style={estilo.texto}>RECOMPENÇAS</Text>
                    <Text style={estilo.texto}>A coleta de todas as 50 ferraduras maximizará a sorte do jogador para 1.000 (não aumenta a chance de ganhar como mencionado anteriormente), além de premiar o jogador com $100,000. Além disso, quatro armas aparecem em frente ao Four Dragons Casino, no extremo sul de The Strip: uma MP5, Satchel Charges, uma SPAS 12 e uma M4. A coleta de todas as 50 ferraduras é necessária para 100% de conclusão.</Text>
                    
            
        </View>

        <View style={estilo.container}>
            <Text style={estilo.titulo} >OSTRAS</Text>
            <Image source={require('../../../assets/fotos/04.jpg')}
                    style={estilo.maps4}/>
                    <Text style={estilo.texto}>RECOMPENÇAS</Text>
                    <Text style={estilo.texto}>A coleta de todas as 50 ostras concede ao jogador uma recompensa de $100,000, capacidade pulmonar máxima e um privilégio em que o jogador pode começar a namorar novas namoradas, independentemente da aparência ou apelo sexual do personagem.</Text>
                    
            
        </View>


            <View style={estilo.container}>
                <Text style={estilo.contato}>contato.porfirios@gmail.com</Text>

            </View>
            
      </ScrollView>
    );
  } 
          
      
      
  export default Outro