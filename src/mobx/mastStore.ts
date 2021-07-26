import { makeAutoObservable, observable } from 'mobx'
import { computed, action } from 'mobx'

class MastStore {
    list = [{message: 'list 1', id: 0}]

    get getList () {
        return this.list
    }

    addlist (obj: any) { this.list.push(obj) }

    constructor () {
        makeAutoObservable(this)
    }
}

const index = new MastStore()

export default index
export type {MastStore}