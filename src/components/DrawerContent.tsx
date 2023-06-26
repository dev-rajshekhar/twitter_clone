import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const profileHeader =
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80';

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{flex: 1, backgroundColor: '#141f27'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.topContainer}>
          <Image source={{uri: profileHeader}} style={styles.profile} />
          <Text style={styles.title}>Raj</Text>

          <Text style={styles.username}>@xyz</Text>
          <View style={styles.data}>
            <View style={styles.following}>
              <Text style={styles.number}>22</Text>
              <Text style={styles.text}> Following</Text>
            </View>
            <View style={styles.followers}>
              <Text style={styles.number}>44</Text>
              <Text style={styles.text}> Followers</Text>
            </View>
          </View>
        </View>
        <DrawerItem
          label={() => <Text style={styles.label}>Profile</Text>}
          onPress={() => props.navigation.navigate('Profile')}
          icon={() => <Icon name="account-outline" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Lists</Text>}
          onPress={() => props.navigation.navigate('Twitter Blue')}
          icon={() => <Icon name="text" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Topics</Text>}
          onPress={() => props.navigation.navigate('Topics')}
          icon={() => <Icon name="chat-processing" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Bookmarks</Text>}
          onPress={() => props.navigation.navigate('Bookmarks')}
          icon={() => (
            <Icon name="bookmark-outline" size={22} color="#898f93" />
          )}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Lists</Text>}
          onPress={() => props.navigation.navigate('Lists')}
          icon={() => <Icon name="menu" size={22} color="#898f93" />}
        />
        <DrawerItem
          label={() => <Text style={styles.label}>Twitter Circle</Text>}
          onPress={() => props.navigation.navigate('Moments')}
          icon={() => <Icon name="group" size={22} color="#898f93" />}
        />
        <View style={{height: 0.2, backgroundColor: '#2b353c'}} />
        <TouchableOpacity
          style={{padding: 10, paddingLeft: 15}}
          onPress={() => props.navigation.navigate('Settings')}>
          <Text style={styles.optionText}>Settings and privacy</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingRight: 0,
    backgroundColor: '#141f27',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  icon: {
    height: 50,
    width: 50,
  },
  topContainer: {
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#2b353c',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    color: '#898f93',
  },
  data: {
    flexDirection: 'row',
    marginTop: 15,
  },
  following: {
    flexDirection: 'row',
    marginRight: 15,
  },
  followers: {
    flexDirection: 'row',
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#898f93',
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    // fontWeight: 'bold',
  },
  bottomContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    height: 50,
    borderTopWidth: 0.2,
    borderTopColor: '#2b353c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomIcon: {
    height: 40,
    width: 40,
  },
});
