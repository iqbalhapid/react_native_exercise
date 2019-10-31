import {observable} from 'mobx'

class ObservableTokenStore {
    @observable token = ""

    updateToken (token) {
        this.token = token;
    }

    getToken (token) {
        return this.token
    }

}

const observableTokenStore = new ObservableTokenStore()
export default observableTokenStore