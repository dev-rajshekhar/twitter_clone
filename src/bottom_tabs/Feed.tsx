import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {tweets} from '../data/data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Tweet {
  id: number;
  username: string;
  content: string;
  media?: string;
  profileImage: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  userProfile: UserProfile;
  comments: Comment[];
}

interface UserProfile {
  id: number;
  name: string;
  bio: string;
  profileImage: string;
}

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: Date;
}

interface TweetComponentProps {
  tweet: Tweet;
}
interface ActionItemProps {
  icon: any;
  count?: number;
  onPress?: () => void;
}

const TweetComponent: React.FC<TweetComponentProps> = ({tweet}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginVertical: 10,
      }}>
      <View style={styles.tweetContainer}>
        <View>
          <Image
            source={{uri: tweet.profileImage}}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.tweetContent}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.username}>{tweet.userProfile.name}</Text>
            <Text style={styles.twitterHandle}> @{tweet.username}</Text>
          </View>
          <Text style={styles.content}>{tweet.content}</Text>
          <View style={{width: '100%'}}>
            {tweet.media && (
              <Image source={{uri: tweet.media}} style={styles.media} />
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 50,
        }}>
        <ActionItem
          icon={'cards-heart-outline'}
          count={200}
          onPress={() => {}}
        />
        <ActionItem icon={'altimeter'} count={200} onPress={() => {}} />
        <ActionItem icon={'chart-bar'} count={200} onPress={() => {}} />
        <ActionItem icon={'share-variant'} onPress={() => {}} />
      </View>
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#eeeeee',
          marginTop: 10,
        }}></View>
    </View>
  );
};
const profileHeader =
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80';

const ActionItem: React.FC<ActionItemProps> = ({icon, count, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center'}}
      onPress={onPress}>
      <MaterialCommunityIcons name={icon} color={'grey'} size={24} />
      <Text>{count}</Text>
    </TouchableOpacity>
  );
};

const Feed: React.FC = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Image source={{uri: profileHeader}} style={styles.profileImage} />
      </Pressable> */}
      <FlatList
        data={tweets}
        renderItem={({item}) => <TweetComponent tweet={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  tweetContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  twitterHandle: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  content: {
    marginTop: 5,
    fontWeight: 'normal',
    fontSize: 16,
  },
  media: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Feed;
