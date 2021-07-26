import { observable, action } from 'mobx'

class TestStore {
    @observable name
    @observable age

    @action 
    changeAge (i: number) {
        this.age = this.age + i
    }

    constructor () {
        this.name = 'hello world'
        this.age = 25
    }
}

const index = new TestStore()

export default index