import MyFragment from "../../hoc/Fragment";
import withClass from "../../hoc/withClass";

function Layout(props){

    return(
        <MyFragment>
            <div>{props.header}</div>
            <div>{props.menu}</div>
            <div>{props.content}</div>
            <div>{props.footer}</div>
        </MyFragment>
    )
}

export default withClass(Layout);