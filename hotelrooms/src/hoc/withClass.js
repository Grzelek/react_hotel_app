

const withClass = (WrappedComponent, ClassName='withClass') => {
    return (props) => {
        return (
            <div className={ClassName}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )
    }
}

export default withClass