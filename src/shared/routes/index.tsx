/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Filter } from 'src/screens/Disappeared/Filter';
import { About } from 'src/screens/User/About';
import { EditUser } from 'src/screens/User/EditUser';
import { LocalModal } from 'src/screens/Initials/Local';
import { Welcome } from 'src/screens/Initials/Welcome';
import { Terms } from 'src/screens/Initials/Terms';
import { CaseInformation } from 'src/screens/Disappeared/CaseInformation';
import { AuthProvider } from '@shared/hooks/contexts/AuthContext';
import { ICaseData, UserProvider } from '@shared/hooks/contexts/UserContext';
import { Chat } from 'src/screens/Supporter/InvolvedCases/Chat';
import { ButtonRegister } from '../components/ButtonRegister';
import { TabBarStyles } from './styles';

import { ProfileRouter } from './ProfileRoutes';
import { SearchRouter } from './SearchRoutes';
import { RegisterRouter } from './RegisterRoutes';
import { SupporterRouter } from './SupporterRoutes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

type Props = { route: any };
type PropsStack = { firstTime: any };

const HomeTabs: React.FC<Props> = ({ route: { params } }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'below-icon',
      tabBarStyle: TabBarStyles.TabBarStyle,
      tabBarIconStyle: TabBarStyles.TabBarIconStyle,
      tabBarLabelStyle: TabBarStyles.TabBarLabelStyle,
      tabBarActiveTintColor: '#009AA5',
      tabBarInactiveTintColor: '#7D7D7E',

      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Search"
      component={SearchRouter}
      initialParams={params}
      options={{
        title: 'Busca',
        tabBarIcon: (props: { color: string }) => (
          <Icon
            name="search"
            type="octicon"
            tvParallaxProperties={undefined}
            size={24}
            color={props.color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Cases"
      component={Chat}
      options={{
        title: 'Casos',
        tabBarIcon: (props: { color: string }) => (
          <Icon
            name="people"
            type="octicon"
            tvParallaxProperties={undefined}
            size={24}
            color={props.color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="RegisterMenu"
      component={RegisterRouter}
      options={{
        title: 'Registrar Caso',
        tabBarIcon: () => (
          <ButtonRegister />
        ),
        tabBarLabel: () => null,
        tabBarStyle: { display: 'none' },
      }}
    />

    <Tab.Screen
      name="Supporter"
      component={SupporterRouter}
      options={{
        title: 'Apoiador',
        tabBarIcon: (props: { color: string }) => (
          <Icon
            name="message-alert-outline"
            type="material-community"
            tvParallaxProperties={undefined}
            size={24}
            color={props.color}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileRouter}
      options={{
        title: 'Perfil',
        tabBarIcon: (props: { color: string }) => (
          <Icon
            name="person-outline"
            type="ionicon"
            tvParallaxProperties={undefined}
            size={24}
            color={props.color}
          />
        ),
      }}
    />

  </Tab.Navigator>
);

export interface IndexParamsList {
  Home: undefined
  Filter: undefined
  About: undefined
  EditUser: undefined
  InfoCase: ICaseData | undefined
  Welcome: undefined
  Terms: undefined
  Local: undefined
}

export const Router: React.FC = () => (
  <UserProvider>
    <AuthProvider>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="EditUser" component={EditUser} />
          <Stack.Screen name="InfoCase" component={CaseInformation} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Terms" component={Terms} />
          <Stack.Screen name="Local" component={LocalModal} />
        </Stack.Group>
      </Stack.Navigator>
    </AuthProvider>
  </UserProvider>
);
