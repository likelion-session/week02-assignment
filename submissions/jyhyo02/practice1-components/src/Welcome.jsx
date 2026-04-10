export function Welcome(props) {
    return (
        <div>
            <Greeting1 name={props.name || "Guest"}/>
        </div>
    );
}

function Greeting1(props) {
    return <h1>안녕하세요, {props.name}님!</h1>;
}