/* Way 1
const onShowPara = () => {
    if(app.show)
        app.show = false;
    else
        app.show = true;

    //app.show = !app.show; //efficient way
    render();
}

const app = {
    show: false,
    text: 'Some text here'
};

const appRoot = document.getElementById('app');
const render = () => {
    
    const template = (
        <div>
            <h1> Visibility Toggle </h1>
            <button onClick={onShowPara}>{app.show ? 'Hide details' : 'Show details'}</button>
            {
                app.show && (
                <div>
                    <p>{app.text} </p>
                </div>  
            )}
        </div>
    );
    //ternary is inefficient because we want to print onyl one thing
    //{app.show ? <p>{app.text}</p>: ''} 
    //therefore use logical and operator
    ReactDOM.render(template, appRoot);   
}

render();

*/

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick = {this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details' }</button>
                {
                    this.state.visibility && (
                        <p> Here is some text </p>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));