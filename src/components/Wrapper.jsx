import { New, Popular } from './contentStyle'

export function Wrapper(Component, props) {
    const { views } = props;
    const wrapper = () => {
        if (views < 100){
            return (
                <New>
                    <Component  {...props }/>
                </New>
                )
            }
        if (views > 1000) {
            return (
                <Popular>
                    <Component  {...props }/>
                </Popular>
                )
        }
        return <Component  {...props }/>
    
    }
    return wrapper
}
