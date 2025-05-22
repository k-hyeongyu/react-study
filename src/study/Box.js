
function Box({title, content}){ //props 객체타입의 매개변수

    return(
        <div style={{backgroundColor : 'gray', border : '1px solid black'}}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Box;