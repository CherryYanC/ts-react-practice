import React from 'react'

interface ErrorBoundaryProps {
    message?: React.ReactNode
    description?: React.ReactNode
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    state = {
        hasError: false
    }
    
    componentDidCatch (err: Error | null, errInfo: object) {
        console.log(err, errInfo)
        this.setState({ hasError: true })
    }

    render () {
        const { hasError } = this.state
        const { children, message, description } = this.props

        if (hasError) {
            return (
                <div>
                    error({message}): 
                    {description}
                    <br />组件出错啦～～ 需要你去具体组件内部修改错误
                </div>
            )
        } else {
            return children
        }
    }
}

export default ErrorBoundary