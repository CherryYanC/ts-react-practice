### ----------- mobx使用小结 ---------------

1. 对比redux明显的感觉使用简单，上手快。

2. mobx6 之前的使用
    ```
        import { observable, computed, action } from 'mobx-react'

        class test {
            @observable name
            @observable age
            @observable hobby

            @computed 
            getInfo () { return this.hobby }

            @action
            addHobby (hobby) {
                this.hobby.push(hobby)
            }

            constructor () {
                this.name = 'test'
                this.age = 23
                this.hobby = ['basketball', 'football', 'sing']
            }
        }
    ```
3. mobx6 之后引入了makeAutoObservable, 改写之后如下
    ```
        import { observable, computed, action } from 'mobx-react'

        class test {
            name = 'test'
            age = 23
            hobby = ['basketball', 'football', 'sing']

            getInfo () { return this.hobby }

            addHobby (hobby) {
                this.hobby.push(hobby)
            }

            constructor () {
                makeAutoObservable(this)       // important
            }
        }
    ```
    注⚠️：在mobx6中继续使用mobx4+的特性，不会触发组件的更新渲染,即使用important那一行才有效

### ts中的interface和type
    1. 语法不同
        两者都可以用来描述对象或者函数的类型，但是语法不同
        interface: 
        ```
            interface Point {
                x: number
                y: number
            }
            interface SetPoint {
                (x: number, y: number) => void
            }
        ```

        type: 
        ```
            type Point = {
                x: number
                y: number
            }
            type SetPoint = (x: number, y: number) => void
        ```
    2. interface 可以被定义多次，并将视为单个视口
        ```
            interface Point { x: number }
            interface Point { y: number }

            const point = { x: 1, y: 2 }
        ```

    3. 扩展语法不同
        interface:
        ```
            interface Point {
                x: number,
                y: number
            }

            interface ChilePoint extends Point {

            }
        ```
        type: 
        ```
            type Point = {
                x: number,
                y: number
            }
            type CHildPoint = Point & { z: number }
        ```
    4. type 可以定义多种类型
        例：
            ```
                // primitive
                type Name = string;

                // object
                type PartialPointX = { x: number; };
                type PartialPointY = { y: number; };

                // union
                type PartialPoint = PartialPointX | PartialPointY;

                // tuple
                type Data = [number, string];

                // dom
                let div = document.createElement('div');
                type B = typeof div;
            ```
    5. type可以计算属性，声称映射类型
        例：
        ```
            type keys = 'firstName' | 'lastName'

            type Dudetype = {
                [key in keys]: string
            }
            const ins: Dudetype = {
                firstName: 'hello',
                lastName: 'world'
            }
        ```
    6. 

### 代码格式几种方式
1. eslint
    作用：提供检查代码能力，但是不会完全格式化你的代码
2. prettier
    作用：Prettier 不提供任何代码检查能力，它只格式化你的代码而忽略语法
3. editorconfig
    作用：配置你的编辑器，以便你所编写的代码已经是个是良好的了，而prettier要做的则是格式化你已经编写的代码

综上所述：为了在代码质量和格式化方面达到最佳检测体验，你确实应该同时使用这两工具
