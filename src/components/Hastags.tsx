import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface HashtagProps {
  tags: string[];
  onPress: (tag: string) => void;
  highlightedTag?: string;
}

const Hashtag: React.FC<HashtagProps> = ({tags, onPress, highlightedTag}) => {
  const handleTagPress = (tag: string) => {
    onPress(tag);
  };

  return (
    <Text style={styles.hashtagsContainer}>
      {tags.map((tag, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTagPress(tag)}
          activeOpacity={0.8}>
          <Text
            style={[
              styles.hashtag,
              tag === highlightedTag && styles.highlightedHashtag,
            ]}>
            #{tag}
          </Text>
        </TouchableOpacity>
      ))}
    </Text>
  );
};

const styles = StyleSheet.create({
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hashtag: {
    color: '#1DA1F2',
    fontWeight: 'bold',
    marginRight: 4,
  },
  highlightedHashtag: {
    color: '#1DA1F2',
    fontWeight: 'bold',
    backgroundColor: '#E8F5FE',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});

export default Hashtag;
