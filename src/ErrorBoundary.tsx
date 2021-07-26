import React from 'react'

class Test extends React.Component<any, any> {

    constructor (props: any) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch (err:any, errInfo: any) {
        console.log(err, errInfo)
        this.setState({ hasError: true })
    }

    render () {
        const { hasError } = this.state
        console.log('hasError', hasError)
        if (hasError) {
            return (
                <div>
                    error: 组件出错啦～～ 需要你去具体组件内部修改错误
                </div>
            )
        } else {
            return <>
                {this.props.children}
            </>
        }
    }
}

export default Test