import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Post {
  id: string;
  title: string;
  likeCount: number;
}

const DATA: Post[] = [
  { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Post', likeCount: 10 },
  { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Post', likeCount: 20 },
  { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Third Post', likeCount: 30 },
];

const App = () => {
  const [posts, setPosts] = useState<Post[]>(DATA);

  const handleLike = (id: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likeCount: post.likeCount + 1 } : post
      )
    );
  };

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.likeContainer}>
        <Icon name="favorite" size={24} color="#ff4081" onPress={() => handleLike(item.id)} />
        <Text style={styles.likeCount}>{item.likeCount}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={posts} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default App;