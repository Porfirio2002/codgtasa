import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { Pc } from '../pc';
import Outro from '../Outros/Outros';
import Home from '../GtaSa/home';



const Tab = createBottomTabNavigator();
  
const Inicio = () => {
return (
    
      <Tab.Navigator>
        <Tab.Screen name="PS2" component={Home} />
        <Tab.Screen name="PC" component={Pc} />
        <Tab.Screen name="OUTROS" component={Outro} />
      </Tab.Navigator>
  
  );
}

export default Inicio