import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TodoButton = ({ onPress, complete, name }) => (
        <TouchableOpacity onPress={onPress} underlayColor='#efefef' style={styles.button}>
        <Text style={[
        complete ? styles.complete : null,
        name === 'Delete' ? styles.deleteButton : null]}>
        {name}
        </Text>
        </TouchableOpacity>
)

const styles = StyleSheet.create({
button: {
        alignSelf: 'flex-end', padding: 7,
        borderColor: '#ededed', borderWidth: 1, borderRadius: 4, marginRight:5
},
text: {
        color: '#666666'
},
complete: {
        color: 'green', fontWeight: 'bold'
},
deleteButton: {
        color: 'rgba(175, 47, 47, 1)'
}

})

export default TodoButton