import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const Lesson = () => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {/* 設定ボタン */}
            <View style={styles.header}>
                <View style={styles.settingsContainer}>
                    <TouchableOpacity>
                        <MaterialIcons name="settings" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* メインボタン */}
            <View style={styles.mainButtonsContainer}>
                <TouchableOpacity style={[styles.mainButton, { backgroundColor: '#FFE4E1' }]}>
                    <AntDesign name="camera" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mainButton, { backgroundColor: '#F0F0F0' }]}>
                    <Entypo name="image-inverted" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* 広告エリア */}
            <View style={styles.adContainer}>
                <Text style={styles.adText}>広告</Text>
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
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    settingsContainer: {
        alignSelf: 'flex-end',
        padding: 4,  // タップ領域を広げる
    },
    mainButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingHorizontal: 20,
    },
    mainButton: {
        width: '45%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    adContainer: {
        backgroundColor: '#6495ED',
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    adText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Lesson;