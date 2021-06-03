import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'WeeChat',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            {/* <Text>
            {auth?.currentUser?.displayName}

            </Text> */}
            {/* <Text>
              Sign out
              </Text> */}
            <Avatar
              rounded
              source={{
                uri: 'https://api.freelogodesign.org/files/0b9fb95789a8404fa449c494d22eee76/thumb/logo_200x200.png?v=637582713750000000'
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 20
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AddChat')}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )
    });
    console.log('hahh', auth.currentUser);
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
