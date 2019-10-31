import React, {
    ActivityIndicator,
    AsyncStorage,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native'

export default class ProtectedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndicator: false,
            secret: null
        }
    }

    _fetchData = () => {
        AsyncStorage.getItem('jwt', (err, accessToken) => {
            fetch('http://192.168.42.130:9999/users', {
                method: 'GET',
                headers : {
                    Accept: 'application/json',
                    Authorization: `JWT $(token)`
                }
            })
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    secret: json.secret,
                    showIndicator: false
                })
            })
            .catch(() => {
                alert('there was an error fetching the secret info')
            })
            .done()
        })
        
        _renderIndicator = () => (
            <ActivityIndicator
            animating
            style={[styles.centering]}
            size='large'
            />
        )

        _renderSecret = () => (
            <Text>
                The secret code is {this.state.secret}
            </Text>
            )
    }

    
    render(){
        return (
        <View style={styles.container}>
            {
            this.state.showIndicator
            ? this._renderIndicator()
            :
                <Text style={styles.centering}>
                {this.state.secret ? this._renderSecret() : <Text>You are not authorized!</Text>}
                </Text>
            }
        </View>
        )
    }

    styles = StyleSheet.create({
        container: {
            marginTop: 40,
            padding: 80,
            flex: 1,
            flexDirection: 'column'
        },
        button: {
            borderRadius: 4,
            padding: 20,
            textAlign: 'center',
            marginBottom: 20,
            color: '#fff'
        },
        greenButton: {
            backgroundColor: '#4CD964'
        },
        blueButton: {
            backgroundColor: '#34AADC',
        },
        centering: {
            flex: 1,
            paddingTop: 28,
            justifyContent: 'center',
            alignItems: 'center'
        }
        })
        
    
}

