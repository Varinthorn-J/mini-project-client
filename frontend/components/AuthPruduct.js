import { useRouter } from 'next/router'
import { useEffect } from 'react'

const AuthProducts = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/ShowProducts')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default AuthProducts


