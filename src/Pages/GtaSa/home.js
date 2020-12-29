import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import estilo from './estilo';

const Home = () => {
    return (
        <ScrollView>
           
        <View style={estilo.container}>
        
      <View>
            <Text style={estilo.titulo}>CODIGOS GTA SAN ANDREAS PS2</Text>

         <Text style={estilo.subtitulo}>  DINHEIRO, ARMAS, SAÚDE </Text>
         <Text style={estilo.texto}>  Armas 1: R1, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, → e ↑ </Text>
         <Text style={estilo.texto}>  Armas 2: R1, R2, L1, R2, ←, ↓, →, ↑, ↓, ↓ e ↓ </Text>
         <Text style={estilo.texto}>  Armas 3: R1, R2, L1, R2, ←, ↓, →, ↑, ↓ e ↓ </Text>
         <Text style={estilo.texto}>  Saúde e munição no máximo e $250,000 de dinheiro: R1, R2, L1, X, ←, ↓, → e ↑ </Text>
         <Text style={estilo.videinfi}>  Vida infinita: ↓, X, →, ←, →, R1, →, ↓, ↑ e △ </Text>
         <Text style={estilo.texto}>  Munição infinita: L1, R1, ▢, R1, ←, R2, R1, ←, ▢, ↑, L1 e L1	 </Text>
         <Text style={estilo.texto}>  Oxigênio infinito: ↓, ←, L1, ↓, ↓, R2, ↓, L2 e ↓ </Text>
         <Text style={estilo.texto}>  Cometer suicídio: →, L2, ↑, R1, ←, ←, R1, L1, L2 e L1 </Text>
         <Text style={estilo.texto}>  Modo Adrenalina: X, X, ▢, R1, L1, X, ↓, ← e X </Text>
         <Text style={estilo.texto}>  Nunca tem fome: ▢, L2, R1, △, ↑, ▢, L2, ↑ e X	 </Text>
         <Text style={estilo.texto}>  Armas nível assasino:↓, ▢, X, ←, R1, R2, ←, →, →, L1, L1 e L1 </Text>

         <Text style={estilo.subtitulo}>  PESSOAS </Text>
         <Text style={estilo.texto}>  Sem polícia: O, →, O, →, ←, ▢, △ e ↑ </Text>
         <Text style={estilo.texto}>  6 estrelas": O, →, O, →, ←, ▢, X e ↓ </Text>
         <Text style={estilo.texto}>  + estrelas: R1, R1, O, R2, ←, →, ←, →, ← e →	 </Text>
         <Text style={estilo.texto}>  - estrelas: R1, R1, O, R2, ↑, ↓, ↑, ↓, ↑ e ↓   </Text>
         <Text style={estilo.texto}>  Recruta pedestres para a gangue de CJ: ↓, ▢, ↑, R2, R2, ↑, →, → e ↑ </Text>
         <Text style={estilo.texto}>  Recruta qualquer pessoa para a gangue de CJ: R2, R2, R2, X, L2, L1, R2, L1, ↓ e X	 </Text>
         <Text style={estilo.texto}>  Respeito no máximo: L1, R1, △, ↑, R2, X, L1, ↑, L2, L2, L1 e L1	 </Text>
         <Text style={estilo.texto}>  Sex Appeal no máximo: O, △, △, ↑, O, R1, L2, ↑, △, L1, L1 e L1 </Text>
         <Text style={estilo.texto}>  Status máximo de veículo: ▢, L2, X, R1, L2, L2, ←, R1, →, L1, L1 e L1	 </Text>
         <Text style={estilo.texto}>  Gordola: △, ↑, ↑, ←, →, ▢, O e ↓ </Text>
         <Text style={estilo.texto}>  Secão: △, ↑, ↑, ←, →, ▢, O e → </Text>
         <Text style={estilo.texto}>  Trincado: △, ↑, ↑, ←, →, ▢, O e ← </Text>
         <Text style={estilo.texto}>  Nevoeiro: R2, X, L1, L1, L2, L2, L2, X </Text>
         <Text style={estilo.texto}>  guangues dominam as ruas: L2, ↓ R1, R1, ←, R1, R1, R2, → e ↓ </Text>
         <Text style={estilo.texto}>  Ativa o Modo Caos: L2, →, L1, △, →, →, R1, L1, →, L1, L1 e L1</Text>
         <Text style={estilo.texto}>  Todos os pedestres são Elvis Presley: L1, O, △, L1, L1, ▢, L2, ↑, ↓ e ← </Text>
         <Text style={estilo.texto}>  Pedestres atacam com armas: X, L1, ↑, ▢, ↓, X, L2, △, ↓, R1, L1 e L1	</Text>
         <Text style={estilo.texto}>  Pedestres caçam CJ: ↓, ↑, ↑, ↑, X, R2, R1, L2 e L2 </Text>
         <Text style={estilo.texto}>  Pedestres se rebelam: ↓, ←, ↑, ←, X, R2, R1, L2, e L1</Text>
         <Text style={estilo.texto}>  Pedestres carregam armas: R2. R1, X, △, X, △, ↑ e ↓ </Text>
         <Text style={estilo.texto}>  Tema Ninja: X, X, ↓, R2, L2, O, R1, O e ▢ </Text>
         <Text style={estilo.texto}>  Tema Funhouse: △, △, L1, ▢, ▢, O, ▢, ↓ e O </Text>
         <Text style={estilo.texto}>  Atrai mulheres: ▢, ←, ▢, ▢, L2, X, △, X e △	 </Text>
         <Text style={estilo.texto}>  Mira perfeita enquanto está dirigindo: ↑, ↑, ▢, L2, →, X, R1, ↓, R2 e O	 </Text>
         <Text style={estilo.texto}>  CJ se move mais rápido: △, ↑, →, ↓ L2, L1 e ▢	 </Text>
         <Text style={estilo.texto}>  CJ pula mais alto: ↑, ↑, △, △, ↑, ↑, ←, →, ▢, R2 e R2 </Text>
         <Text style={estilo.texto}>  Soco mais forte: ↑, ←, X, △, R1, O, O, O e L2	 </Text>
         <Text style={estilo.texto}>  Festa na praia: ↑, ↑, ↓, ↓, ▢, O, L1, R1, △ e ↓ </Text>

         <Text style={estilo.subtitulo}>  VEÍCULOS E UTILITÁRIOS </Text>
         <Text style={estilo.texto}>  Helicópeto: O, X, L1, O, O, L1, O, R1, R2, L2, L1 e L1 </Text>
         <Text style={estilo.texto}>  Caminhão: R1, ↓, ←, →, R2, ↑, →, ▢, →, L2, L1 e L1 </Text>
         <Text style={estilo.texto}>  Trator: R2, L1, L1, →, →, ↑, ↑, X, L1 e ← </Text>
         <Text style={estilo.texto}>  Para-quedas: ←, →, L1, L2, R1, R2, R2, ↑, ↓, → e L1	 </Text>
         <Text style={estilo.texto}>  Katana: X, X, ↑, R2, L2, O, R1, O e ▢	 </Text>
         <Text style={estilo.texto}>  Tanque de guerra: O, O, L1, O, O, O, L1, L2, R1, △, O e △	 </Text>
         <Text style={estilo.texto}>  Ranger: ↓, →, →, L1, →, ↓, ▢ e L2	Veículo off-road </Text>
         <Text style={estilo.texto}>  Carrinho de golf: O, L1, ↓, R1, L2, X, R1, L1, O e X </Text>
         <Text style={estilo.texto}>  Hotring Racer 1: R1, O, R2, ←, L1, L2, X, X, ▢ e R1 </Text>
         <Text style={estilo.texto}>  Hotring Racer 2: R2, L1, O, ←, L1, R1, →, ↑, O, R2</Text>
         <Text style={estilo.texto}>  Bloodring Banger: ↑, R1, O, L2, L2, X, R1, L1, ← e ← </Text>
         <Text style={estilo.texto}>  Limousine: R2, ↑, L1, ←, ←, R1, L1, O e → </Text>
         <Text style={estilo.texto}>  Romero: ↓, R2, ↓, R1, L2, ←, R1, L1, ← e → </Text>
         <Text style={estilo.texto}>  Caminhão de lixo: O, R1, O, R1, ←, ←, R1, L1, O e ← </Text>
          <Text style={estilo.texto}>  Quadricicolo: ←, ←, →, →, ↑, ↑ ▢, O, △, R1 e R2	Quadriciclo </Text>
         <Text style={estilo.texto}>  Hydra: △, △, ▢, O, X, L1, L1, ↓ e ↑ </Text>
         <Text style={estilo.texto}>  Vortex: △, △, ▢, O, X, L2, L2, ↓ e ↓	Barco </Text>
         <Text style={estilo.texto}>  Caminhão monstro: →, ↑, R1, R1, R1, →, △, △, X, O, L1 e L1</Text>
         <Text style={estilo.texto}>  Stunt Plane: O, ↑, L1, L2, ↑, R1, L1, L1, ←, ←, X e △ </Text>
         <Text style={estilo.texto}>  Todos os carros têm nitro: ←, △, R1, L1, ↓, ▢, △, ↓, O, L2, L1 e L1	 </Text>
         <Text style={estilo.texto}>  Carros saltam no ar em batidas: ▢, R2, ↓, ↓, ←, ↓, ←, ←, L2 e X	 </Text>
         <Text style={estilo.texto}>  Todos os carros são rurais 1: L1, L1, R1, R1, L2, L1, R2, ↓, ← e ↑ </Text>
         <Text style={estilo.texto}>  Todos os carros são rurais 2: △, ←, ▢, R2, ↑, L2, ↓, L1, X, L1, L1 e L1	</Text>
         <Text style={estilo.texto}>  Todos os carros são ruins: L2, →, L1, ↑, X, L1, L2, R2, R1, L1, L1 e L1	 </Text>                             
         <Text style={estilo.texto}>  Todos os carros são invisíveis: △, L1, △, R2, ▢, L1 e L1 </Text>
         <Text style={estilo.texto}>  Controle do carro melhorado: △, R1, R1, ←, R1, L1, R2 e L1 </Text>
         <Text style={estilo.texto}>  Carros mais rápidos: →, R1, ↑, L2, L2, ←, R1, L1, R1 e R1 </Text>
         <Text style={estilo.texto}>  Tráfego intenso: R2, O, R1, L2, ←, R1, L1, R2 e L2 </Text>
         <Text style={estilo.texto}>  Tráfego reduzido: X, ↓, ↑, R2, ↓, △, L1, △ e ← </Text>
         <Text style={estilo.texto}>  Dirigir na água: →, R2, O, R1, L2, ▢, R1 e R2 </Text>
         <Text style={estilo.texto}>  Destruir todos os carros: R2, L2, R1, L1, L2, R2, ▢, △, O, △, L2 e L1	 </Text>
         <Text style={estilo.texto}>  Carros da cor preta: O, L2, ↑, R1, ←, X, R1, L1, ← e O	 </Text>
         <Text style={estilo.texto}>  Carros da cor rosa: O, L1, ↓, L2, ←, X, R1, L1, → e O	 </Text>
         <Text style={estilo.texto}>  Táxis possuem nitro: ↑, X, △, X, △, X, ▢, R2 e → </Text>
         <Text style={estilo.texto}>  Carros raros:	↑, L1, R1, ↑, →, ↑, X, L2, X e L1   </Text>
         <Text style={estilo.texto}>  Carros voam: ▢, ↓, L2, ↑, L1, O, ↑, X e ← </Text>
         <Text style={estilo.texto}>  Barcos voam: R2, O, ↑, L1, →, R1, →, ↑, ▢ e △ </Text>
         <Text style={estilo.texto}>  Carro da Morte: L1, L2, L2, ↑, ↓, ↓, ↑, R1, R2 e R2 </Text>
         <Text style={estilo.texto}>  Saltos com uma bicicleta: △, ▢, O, O, ▢, O, O, L1, L2, L2, R1 e R2 </Text>

         <Text style={estilo.subtitulo}>  TEMPO </Text>
         <Text style={estilo.texto}>  Céu laranja: ←, ←, L2, R1, →, ▢, ▢, L1, L2 e X </Text>
         <Text style={estilo.texto}>  Céu do meio-dia: R2, X, L1, L1, L2, L2, L2, Baixo </Text>
         <Text style={estilo.texto}>  Acelera o tempo: O, O, L1, ▢, L1, ▢, ▢, ▢, L1, △, O e △	 </Text>
         <Text style={estilo.texto}>  Desacelera o tempo: △, ↑, →, ↓, ▢, R2 e R1 </Text>
         <Text style={estilo.texto}>  Tempo ensolarado: R2, X, L1, L1, L2, L2, L2 e △ </Text>
         <Text style={estilo.texto}>  Tempo muito ensolarado: R2, X, L1, L1, L2, L2, L2 e ↓ </Text>
         <Text style={estilo.texto}>  Nublado 1: R2, X, L1, L1, L2, L2, L2 e ▢ </Text>
         <Text style={estilo.texto}>  Nublado 2: L2, ↓, ↓, ←, ▢, ←, R2, ▢, X, R1, L1 e L1 </Text>
         <Text style={estilo.texto}>  Névoa: R2, X, L1, L1, L2, L2, L2 e X </Text>
         <Text style={estilo.texto}>  Tempestade: R2, X, L1, L1, L2, L2, L2 e O </Text>
         <Text style={estilo.texto}>  Tempestade de areia: ↑, ↓, L1, L1, L2, L2, L1, L2, R1 e R2 </Text>
         <Text style={estilo.texto}>  Sempre meia-noite: ▢, L1, R1, →, X, ↑, L1, ← e ← </Text>

         


         
         
        </View>

            </View>
            
      </ScrollView>
    );
  } 
          
      
      
  export default Home