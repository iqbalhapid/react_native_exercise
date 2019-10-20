import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TabBarItem = ({ border, title, selected, setType, type }) => (
        <TouchableOpacity underlayColor='#efefef' onPress={setType} style={[
        styles.item, selected ? styles.selected : null, border ? styles.border
        : null,
        type === title ? styles.selected : null]}>
        <Text style={[styles.itemText, type === title ? styles.bold : null]}>
        {title}
        </Text>
        </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
},
border: {
    borderLeftWidth: 1, borderLeftColor: '#dddddd'
},
itemText: {
    color: '#777777', fontSize: 16
},
selected: {
    backgroundColor: '#ffffff',
},
bold: {
    fontWeight: 'bold',
    color: 'pink'
}
})

export default TabBarItem