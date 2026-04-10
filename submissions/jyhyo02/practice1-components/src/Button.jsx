function Button({ text = "클릭", onClick = () => alert("클릭 했노") }) {
    return <button onClick={onClick}>{text}</button>;
}

export default Button;