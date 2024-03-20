import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function GetAPI() {
    const [users, setUsers] = useState<User[]>([]);

    const URL = "https://jsonplaceholder.typicode.com/users";

    const fetchUsers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderItem = ({ item }: { item: User }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Users</Text>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 20,
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
    },
});