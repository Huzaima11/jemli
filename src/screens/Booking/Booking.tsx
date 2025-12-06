import React, { useState } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';

const UpcomingRoute = () => (
    <View style={styles.scene}>
        <Text>Upcoming Tab</Text>
    </View>
);

const CompletedRoute = () => (
    <View style={styles.scene}>
        <Text>Completed Tab</Text>
    </View>
);

const renderScene = SceneMap({
    upcoming: UpcomingRoute,
    completed: CompletedRoute,
});

const Booking = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const routes = [
        { key: 'upcoming', title: 'Upcoming' },
        { key: 'completed', title: 'Completed' },
    ];

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            renderLabel={({ route, focused }) => (
                <Text style={[styles.label, focused && styles.focusedLabel]}>
                    {route.title}
                </Text>
            )}
        />
    );

    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    );
};

export default Booking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        elevation: 0,
        shadowOpacity: 0
    },
    indicator: {
        backgroundColor: '#DC7917',
        height: 3,
    },
    label: {
        color: '#000',
        fontSize: 16,
        textTransform: 'capitalize',
    },
    focusedLabel: {
        color: '#DC7917',
    }
});
 