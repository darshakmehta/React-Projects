/* Version 1.0
console.log("App.js is running!");

//JSX - JavaScript XML
//JSX is JavaScript syntax extension, and it is not part of JavaScript, it is provided by REACT
//React offers new way to define our template and inject our data into this template.
//JSX makes it much easier to work.

//SCSS or LESS language extension for CSS, like variable declaration

//var template =  <p>This is JSX from app.js!</p>; //static, no dynamic values injected inside it.
//Taken from babel for temporary fix
var template = React.createElement(
    'h1',
    { id: "someid"},
    'This is JSX from app.js!'
  );
var appRoot = document.getElementById("app");

//render is only one method we will use in ReactDom
ReactDOM.render(template, appRoot); //render our application

*/

/* Version 1.1
var template = <p>Indecision App</p>;
var appRoot = document.getElementById("app");

//render is only one method we will use in ReactDom
ReactDOM.render(template, appRoot); //render our application

*/


/*Version 1.2
//JSX 


const templateold = (
    <div>
      <h1>Darshak</h1>
      <p>This is some info </p>
      <ol>
        <li> Item one</li>
        <li> Item second</li>
      </ol>
    </div>
  );
  //Way 1
  const userName = 'Darshak';
  const userAge = 23;
  const userLocation = 'Charlotte';
  const template2 = (
    <div>
      <h1> {userName}</h1>
      <p> Age: {userAge} </p>
      <p> Location: {userLocation} </p>
    </div>
  );
  
  //Way 2
  const user = {
    name: 'Darshak',
    age: 23,
    location: 'Charlotte'
  };
  
  function getLocation(location) {
    if(location) {
      return <p> Location: {location}</p>;
    }
  }
  const template3 = (
    <div>
      <h1> {user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p> Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  );

  
let count = 0;
const addOne = () => {
  count = count + 1;
  renderCounterApp();
};

const subtractOne = () => {
  count = count - 1;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

// const templateCount = (
//   <div>
//     <h1> Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={subtractOne}>-1</button>
//     <button onClick={reset}>Reset</button>
//   </div>
// );
//console.log(templateCount);
const appRoot = document.getElementById('app');

//ReactDOM.render(templateCount,appRoot);

const renderCounterApp = () => { //horribly inefficient
  const templateCount = (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateCount,appRoot);
};

renderCounterApp();  //horribly inefficient
*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);
      if(!isNaN(count))
        this.setState(() => ({ count }));
    } catch (e) {
      this.setState(() => ({count: 0}));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      //const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count : prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count : prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count : 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick = {this.handleAddOne}>+1</button>
        <button onClick = {this.handleMinusOne}>-1</button>
        <button onClick = {this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));