import React from 'react'
import './utils/index'

type Props = {
    onError?: Function
    onReset?: Function
    fallback: any
    FallbackComponent: any
}

class ErrorBoundary extends React.Component<Props> {
    state = {
        error: false
    }

    static getDerivedStateFromError (error: any) {
        return {
            error
        }
    }

    componentDidCatch (error: any, errorInfo: any) {
        if (this.props?.onError) {
            console.log(error, errorInfo)
        }
    }
    
    resetErrorBoundary = () => {
        if (this.props.onReset) this.props.onReset();
        this.setState({ error: false });
      };

    render () {

        const { fallback, FallbackComponent } = this.props
        const { error } = this.state
        if (error) {
            const fallbackProps = { 
                error, 
                resetErrorBoundary: this.resetErrorBoundary,
            }
            if (React.isValidElement(fallback)) {
                return fallback
            }

            // 组件方式传入
            if (FallbackComponent) {
                return <FallbackComponent {...fallbackProps} />
            }
            throw new Error("ErrorBoundary 组件需要传入兜底UI");
        }

        return this.props.children
    }
}

export default ErrorBoundary