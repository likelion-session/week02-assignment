function Button({text, onClick}) {
    return (
        <div>
            <button onClick={()=>alert(onClick)}>{text}</button>
        </div>
    ); 
}

export default Button