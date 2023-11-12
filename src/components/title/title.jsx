import "./title.css"

function Title(props) {
    return(
        <div className="title">
            <div className="title-text">
            {props.title}
            </div>
        </div>
    )
}
export default Title