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
            <Text style={estilo.titulo} >NAMORADAS</Text>
            <Text style={estilo.texto}>Bom encontro: +5%</Text>
            <Text style={estilo.texto}>Encontro ruim: -5%</Text>
            <Text style={estilo.texto}>Flores: +1%</Text>
            <Text style={estilo.texto}>Dildo: +1%</Text>
            <Text style={estilo.texto}>Bom encontro entre 2 jogadores (Playstation): +5%</Text>
            <Text style={estilo.texto}>Encontro ruim entre 2 jogadores (Playstation): -5%</Text>
            <Text style={estilo.texto}>Namorada aceitar beijo: +1%</Text>
            <Text style={estilo.texto}>Namorada não aceitar beijo: -1%</Text>
            <Text style={estilo.texto}>Hotcoffee (Tomar um cafézinho): +5%</Text>

        <Text style={estilo.titulo}>DENISE</Text>
        <Image 
            source={require('../../../assets/fotos/denise.jpg')}
            style={estilo.namorada}
        />
            <Text style={estilo.texto}>Você conhece Denise na missão Burning Desire, quando salva ela de um incêndio. Denise é bem do gueto mesmo, gosta de atirar nas pessoas e de dançar no clube de Los Santos.</Text>
            <Text style={estilo.texto}>Localização: Ela mora perto da sua casa, do lado da ponte.</Text>
            <Text style={estilo.texto}>Horários: Entre 16:00 e 06:00</Text>
            <Text style={estilo.texto}>Encontro para comer: O lugar preferido de Denise fica a poucos quarteirões de sua casa. Você poderá leva-la a alguns fast foods se quiser variar um pouco.</Text>
            <Text style={estilo.texto}>Encontro para dançar: Leve-a ao único clube de dança de Los Santos, que está marcado no mapa e dance perfeitamente.</Text>
            <Text style={estilo.texto}>Leva-la para passear: Denise gosta de passear pela área ao redor de sua casa e adora velocidade. Quando a barra “FUN” aparecer acelere o carro e pare perto das gangues pra ela atirar.</Text>
            <Text style={estilo.texto}>Presentes: Procure flores ou vá a delegacia pegar o “pinto”,aperte L1 pra presenteá-la.</Text>
            <Text style={estilo.texto}>Hotcoffee: Denise irá lhe convidar para tomar café após seu relacionamento com ela atingir 40%.</Text>
            <Text style={estilo.texto}>Com 50% ela lhe dará as chaves do carro dela, um Hustle verde;</Text>
            <Text style={estilo.texto}>Com 100% ela lhe dará a Pinp Suit, a roupa de cafetão.</Text>

            <Text style={estilo.titulo}>MICHELLE</Text>
            <Image 
                source={require('../../../assets/fotos/Michelle.jpg')}
                style={estilo.namorada}
            />
            <Text style={estilo.texto}>Michelle é uma mecânica que fica de vez enquanto na auto escola de carros, em San Fierro. Você tem que ser gordão pra chamar a atenção dela, quando estiver obeso, vá a auto escola falar com ela e marcar um encontro.</Text>
            <Text style={estilo.texto}>Localização: Ela mora no norte de San Fierro, numa oficina.</Text>
            <Text style={estilo.texto}>Horários: Entre 00:00 e 12:00</Text>
            <Text style={estilo.texto}>Encontro para comer: Ela gosta de bares, então a leve para os bares nas redondezas.</Text>
            <Text style={estilo.texto}>Encontro para dançar: Leve-a para o único clube de dança de San Fierro, marcado no mapa.</Text>
            <Text style={estilo.texto}>Leva-la para passear: Quanto mais rápido melhor. Dirija o mais rápido possível e evite colisões. Michelle não se importará com o local que você está indo, tudo o que ela quer é que você guie rápido.</Text>
            <Text style={estilo.texto}>Encontro especial: Aleatoriamente, haverá um encontro especial, onde você não irá guiar o carro, e sim Michelle. Nesse encontro você não terá que fazer nada, apenas observar a paisagem. Chegue no local e, para evitar um bug do jogo, desça do carro e vá até a marca vermelha andando. Michelle irá entrar no carro do lado do motorista e você do lado do passageiro. A visão mudará para primeira pessoa, e você irá poder controlar a câmera livremente. Depois de algum tempo rodando, Michelle irá voltar para casa e encerrar o encontro. Caso você aperte acidentalmente o botão para descer do carro, o encontro irá falhar.</Text>
            <Text style={estilo.texto}>Enquanto estiver namorando Micelle, você poderá usar a garagem da casa dela como se fosse uma Pay N’ Spray, mas sem pagar nada;</Text>
            <Text style={estilo.texto}>Com 50% ela lhe dará as chaves de seu Monster Truck;</Text>
            <Text style={estilo.texto}>Com 100% ela lhe dará a Racing Suit, um uniforme de piloto com o logotipo da garagem dela nas costas.</Text>


            <Text style={estilo.titulo}>HELENA</Text>
            <Image 
                source={require('../../../assets/fotos/Helena.jpg')}
                style={estilo.namorada}
            />
            <Text style={estilo.texto}>Helena é uma advogada. Ela fica de vez enquanto em Blueberry, uma cidadezinha ao norte de Los Santos. Você a encontra em cima do telhado de uma Ammunation, atirando nos alvos.</Text>
            <Text style={estilo.texto}>Requerimentos para ela namorar com CJ</Text>
            <Text style={estilo.texto}>25% ou menos de músculos;</Text>
            <Text style={estilo.texto}>Pouca gordura;</Text>
            <Text style={estilo.texto}>Alto nível de sex appeal.</Text>
            <Text style={estilo.texto}>Horários:Entre 14:00 a 2:00 e 08:00 a 12:00</Text>
            <Text style={estilo.texto}>Encontro para comer: O restaurante mais próximo que Helena gosta fica em Rodeo.</Text>
            <Text style={estilo.texto}>Encontro para dançar: Você escolhe o mais próximo, mas os dois clubes são distantes. Los Santos é a melhor opção por causa da distância, mas ela não têm preferências entre Los Santos e San Fierro.</Text>
            <Text style={estilo.texto}>Leva-la para passear: Helena gosta que você dirija devagar e corretamente. Ela gosta de passear pelo campo e pelas partes mais belas das cidades. Para um melhor desempenho, passeie nas áreas próximas da fazenda dela.</Text>
            <Text style={estilo.texto}>Sexo: Helena irá lhe convidar para tomar café após seu relacionamento com ela atingir 70%</Text>
            <Text style={estilo.texto}>Enquanto estiver namorando Helena, você terá acesso ao galpão da fazenda dela, que tem uma chainsaw (serra elétrica), um flamethrower (lança-chamas), coquetéis molotov e uma pistola;</Text>
            <Text style={estilo.texto}>Com 50% ela lhe dará as chaves de seu Bandito;</Text>
            <Text style={estilo.texto}>Com 100% você receberá a Rural Clothes.</Text>
           

            <Text style={estilo.titulo}>KATIE</Text>
            <Image 
                source={require('../../../assets/fotos/Katie.jpg')}
                style={estilo.namorada}
            />
            <Text style={estilo.texto}>Katie é uma enfermeira, ela pode ser encontrada no Country Club de San Fierro, próximo a academia.</Text>
            <Text style={estilo.texto}>Requerimentos para ela namorar CJ</Text>
            <Text style={estilo.texto}>75% ou mais de músculos;</Text>
            <Text style={estilo.texto}>Alto nível de sex appeal.</Text>
            <Text style={estilo.texto}>Localização: Ela mora em The Paradise District.</Text>
            <Text style={estilo.texto}>Horários: Entre 12:00 e 00:00</Text>
            <Text style={estilo.texto}>Encontro para comer: Ela gosta de restaurantes (dinner’s).</Text>
            <Text style={estilo.texto}>Encontro para dançar: Leve-a para o clube em San Fierro.</Text>
            <Text style={estilo.texto}>Leva-la para passear: Ela gosta de pouca velocidade. Não corra e não bata. Ela também detesta as áreas perto da casa dela. Aconselho você a leva-la para Chinatown, local que ela realmente adora. Dica: quando ela pedir para você mostrar como anda de carro ande em marcha ré,que você estará na velocidade que ela gosta.</Text>
            <Text style={estilo.texto}>Sexo: Katie irá lhe convidar para tomar café após seu relacionamento com ela atingir 50%.</Text>
            <Text style={estilo.texto}>Quando você for pro hospital, suas armas não serão confiscadas;</Text>
            <Text style={estilo.texto}>Aos 50% ela te da as chaves do Romero, um carro funerário;</Text>
            <Text style={estilo.texto}>Nos 100% ela te presenteia com a roupa de médico.</Text>
            
            
            
           <Text style={estilo.texto}>Barbara é uma policial separada do marido e tem 2 filhos. Ela pode ser encontrada em El Quebrados, na parte deserta de San Andreas. Apesar de ser uma mulher da lei ela não se importa que você cometa crimes.</Text>
           <Text style={estilo.texto}>Requerimentos</Text>
           <Text style={estilo.texto}>50% ou mais de gordura;</Text>
           <Text style={estilo.texto}>Alto nível de sex appeal.</Text>
           <Text style={estilo.texto}>Localização: Na própria delegacia em El Quebrados.</Text>
           <Text style={estilo.texto}>Horários: Entre 16:00 e 06:00</Text>
           <Text style={estilo.texto}>Encontro para comer: Barbara gosta de restaurantes (dinner’s). O mais próximo fica em El Quebrados.</Text>
           <Text style={estilo.texto}>Encontro para dançar: Escolha entre ir a San Fierro ou Las Venturas... San Fierro parece ser um pouco mais próximo do fim de mundo em que ela mora.</Text>
           <Text style={estilo.texto}>Leva-la para passear: Barbara gosta de andar o mais devagar possível. Se arraste pelas estradas com ela pelas áreas ao redor de El Quebrados.</Text>
           <Text style={estilo.texto}>Sexo: Barbara irá lhe convidar para tomar café após seu relacionamento com ela atingir 60%.</Text>
           <Text style={estilo.texto}>Quando for preso, suas armas não serão levadas e você não terá que pagar fiança;</Text>
           <Text style={estilo.texto}>Com 50% ela te da as chaves da Ranger da polícia;</Text>
           <Text style={estilo.texto}>Aos 100% ela te da a roupa de policial.</Text>

           <Text style={estilo.titulo}>MILLIE</Text>
            <Image 
                source={require('../../../assets/fotos/Millie.jpg')}
                style={estilo.namorada}/>
                <Text style={estilo.texto}>Você conhece Millie na missão Key to her heart, onde você ganha a roupa de gigolô. Use essa roupa pra fazer sexo com a safada. Falando nisso ela é a namorada mais safada, o quarto dela é todo especial, decorado como um inferno!</Text>
                <Text style={estilo.texto}>Localização: Você encontra ela no norte de Las Venturras.</Text>
                <Text style={estilo.texto}>Horários: Entre 12:00 e 22:00</Text>
                <Text style={estilo.texto}>Encontro para dançar: Leve-a para o Camel’s Toe, em Las Venturas.</Text>
                <Text style={estilo.texto}>Leva-la para passear: Ela gosta que você guie na velocidade média. Não é muito difícil agrada-la. Ela gosta da área em que vive, então basta ficar rodando pelas ruas da vizinhança dela.</Text>
                <Text style={estilo.texto}>Encontro especial: O encontro especial de Millie é justamente seu tipo mais simples e fácil de encontro. Ela pedirá que você vista a gimp suit e lhe convidará para entrar em sua casa. É basicamente um encontro sexual, mas não conta como sexo nas estatísticas nem você precisa dar nenhum tipo de presente para ela.</Text>
                <Text style={estilo.texto}>Sexo: Millie irá lhe convidar para tomar café após seu relacionamento com ela atingir 40%.</Text>
                <Text style={estilo.texto}>Com aproximadamente 35%, Millie irá ligar para você e falar que você pode ir até a casa dela para pegar o keycard. Entre na casa dela e pegue o cartão (necessário para a última heist mission, em Las Venturas);</Text>
                <Text style={estilo.texto}>Com 50% ela lhe dará as chaves de seu Club cor-de-rosa;</Text>
                <Text style={estilo.texto}>com 100% nada, já que a Gimp suit você já pega desde o começo de seu namoro com ela; Aliás, é preferível usar a Gimp suit sempre que for encontrar com ela.</Text>

                
            
        </View>

            <View style={estilo.container}>
                <Text style={estilo.contato}>contato.porfirios@gmail.com</Text>
            </View>
            
      </ScrollView>
    );
  } 
          
      
      
  export default Outro