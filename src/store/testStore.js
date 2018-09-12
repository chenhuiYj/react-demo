import {observable, action} from 'mobx';
class Store {
    @observable todos = [
        {
            id: 0,
            count: 0,
            title: "完成 Mobx 翻译",
        },
        {
            id: 1,
            count: 0,
            title: "这是第二条记录",
        }
    ];

    @action addCount(index) {
        this.todos[index].count++;
    }

    @action todoAdd(obj) {
        this.todos.push(obj);
    }
}
const store = new Store();
export default store;
