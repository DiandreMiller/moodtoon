import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface SelectAColorProps {
    selectedColor: string;
    onColorChange: (color: string) => void;
}

const SelectAColor: React.FC<SelectAColorProps> = ({ selectedColor, onColorChange }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isColorPickerOpen, setColorPickerOpen] = useState<boolean>(false);

    const handleColorChange = (color: string) => {
        onColorChange(color);
        console.log('Selected color:', color);
    };

    useEffect(() => {
        if (scrollPosition && scrollPosition > 0) {
            setTimeout(() => {
                scrollViewRef.current?.scrollTo({ y: scrollPosition });
            }, 100);
        }
    }, [selectedColor]);

    const scrollViewRef = React.useRef<ScrollView>(null);

    const handleScroll = (event: any) => {
        // Update scroll position
        setScrollPosition(event.nativeEvent.contentOffset.y);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Select A Mood"
                    onPress={() => setColorPickerOpen(!isColorPickerOpen)}
                />
            </View>
            {isColorPickerOpen && (
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    <Picker
                        selectedValue={selectedColor}
                        onValueChange={handleColorChange}
                        style={styles.picker}
                    >
                        <Picker.Item label='Select a color' value='' enabled={false} />
                        <Picker.Item label='Red' value='red'/>
                        <Picker.Item label="Orange" value="orange" />
                        <Picker.Item label="Yellow" value="yellow" />
                        <Picker.Item label="Green" value="green" />
                        <Picker.Item label="Blue" value="blue" />
                        <Picker.Item label="Purple" value="purple" />
                        <Picker.Item label="Pink" value="pink" />
                        <Picker.Item label="Black" value="black" />
                        <Picker.Item label="White" value="white" />
                        <Picker.Item label="Gray" value="gray" />
                        <Picker.Item label="Brown" value="brown" />
                        <Picker.Item label="Gold" value="gold" />
                        <Picker.Item label="Silver" value="silver" />
                    </Picker>
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 60,
    },
    picker: {
        width: 200,
    },
});

export default SelectAColor;
