import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Camera = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* ヘッダー */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Camera App</Text>
                <TouchableOpacity>
                    <MaterialIcons name="settings" size={24} color="#FF6B6B" />
                </TouchableOpacity>
            </View>

            {/* 写真グリッド */}
            <View style={styles.imageGrid}>
                <Image
                    source={require('../assets/sample1.jpg')}
                    style={styles.gridImage}
                />
                <Image
                    source={require('../assets/sample2.jpg')}
                    style={styles.gridImage}
                />
                <Image
                    source={require('../assets/sample3.jpg')}
                    style={styles.gridImage}
                />
            </View>

            {/* メインアクション */}
            <View style={styles.mainActions}>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="camera" size={30} color="#FF6B6B" />
                    <Text style={styles.actionText}>Capture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="images" size={30} color="#FF6B6B" />
                    <Text style={styles.actionText}>Gallery</Text>
                </TouchableOpacity>
            </View>

            {/* フッターナビゲーション */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="home" size={24} color="#FF6B6B" />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerTab}>
                    <Ionicons name="settings-outline" size={24} color="#666" />
                    <Text style={styles.footerText}>Settings</Text>
                </TouchableOpacity>
            </View>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    imageGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    gridImage: {
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
    },
    mainActions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 40,
    },
    actionButton: {
        alignItems: 'center',
    },
    actionText: {
        color: '#FF6B6B',
        marginTop: 8,
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    footerTab: {
        alignItems: 'center',
    },
    footerText: {
        marginTop: 4,
        fontSize: 12,
        color: '#666',
    },
});

export default Camera; 