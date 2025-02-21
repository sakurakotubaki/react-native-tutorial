import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome5,
} from '@expo/vector-icons';

const Facebook = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* ヘッダー */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>facebook</Text>
                <View style={styles.headerRight}>
                    <Text style={styles.time}>10:29</Text>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="wifi" size={16} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="battery-full" size={16} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <MaterialCommunityIcons name="facebook-messenger" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView style={styles.content}>
                {/* 投稿作成エリア */}
                <View style={styles.createPost}>
                    <TouchableOpacity style={styles.postInput}>
                        <Text style={styles.postInputText}>今何してる？</Text>
                    </TouchableOpacity>
                </View>

                {/* 投稿カード */}
                <View style={styles.post}>
                    <View style={styles.postHeader}>
                        <View>
                            <Text style={styles.postAuthor}>田中太郎</Text>
                            <Text style={styles.postTime}>2時間前</Text>
                        </View>
                    </View>
                    <Text style={styles.postContent}>
                        今日は素晴らしい天気です！公園でピクニックを楽しんできました。
                    </Text>
                    <View style={styles.postActions}>
                        <TouchableOpacity style={styles.actionButton}>
                            <FontAwesome5 name="thumbs-up" size={18} color="#666" />
                            <Text style={styles.actionText}>いいね！</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <FontAwesome5 name="comment" size={18} color="#666" />
                            <Text style={styles.actionText}>コメント</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <FontAwesome5 name="share" size={18} color="#666" />
                            <Text style={styles.actionText}>シェア</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1877f2',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        marginRight: 10,
        fontSize: 14,
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 10,
    },
    content: {
        flex: 1,
    },
    createPost: {
        padding: 12,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    postInput: {
        padding: 8,
        backgroundColor: '#f0f2f5',
        borderRadius: 20,
    },
    postInputText: {
        color: '#666',
        marginLeft: 8,
    },
    post: {
        backgroundColor: 'white',
        paddingVertical: 8,
    },
    postHeader: {
        flexDirection: 'row',
        padding: 12,
    },
    postAuthor: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    postTime: {
        color: '#666',
        fontSize: 13,
        marginTop: 2,
    },
    postContent: {
        padding: 12,
        fontSize: 15,
        lineHeight: 20,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginTop: 8,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    actionText: {
        marginLeft: 6,
        color: '#666',
        fontSize: 13,
    },
});

export default Facebook;
