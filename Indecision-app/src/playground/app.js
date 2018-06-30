class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options)
        this.setState(() => ({ options: options}));

    }catch (e) {
      this.setState(() => ({ options}))
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    //given component disappears
    console.log("componentWillUnmount");
  }
  handleDeleteOptions() {
    //way 1
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // });
    //way 2
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
    } 
    
    //way 1
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   };
    // });
    //way 2
    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  }
  render () {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle = {subtitle} />
        <Action 
          handlePick = {this.handlePick}
          hasOptions = {this.state.options.length > 0}
        />
        <Options 
          options = {this.state.options} 
          handleDeleteOptions = {this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      {props.subtitle && <h2>{props.subtitle}  </h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> {this.props.title} </h1>
//         <h2> {this.props.subtitle} </h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button disabled = {!props.hasOptions} 
      onClick = {props.handlePick}
      > 
      What should I do? </button>
    </div>
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled = {!this.props.hasOptions} 
//         onClick = {this.props.handlePick}
//         > 
//         What should I do? </button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick = {props.handleDeleteOptions}> Remove All </button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => 
        <Option 
          key = {option} 
          optionText = {option}
          handleDeleteOption={props.handleDeleteOption}
        />
      )}
    </div>
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick = {this.props.handleDeleteOptions}> Remove All </button>
//         {
//           this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}> 
        remove 
      </button>
    </div>
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p> {this.props.optionText} </p>
        
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
   e.preventDefault();
   
   const option = e.target.elements.option.value.trim();
   const error = this.props.handleAddOption(option);

   //way 1
    // this.setState(() => {
    //   return { error };
    // })
    //way2
    this.setState(() => ({ error }));
    if(!error) {
      e.target.elements.option.value = '';
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error} </p>}
        <form onSubmit= {this.handleAddOption}>
          <input type = "text" name="option" />
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}
//stateless functional components which takes props
// const User = (props) => {
//   return (
//     <div>
//       <p> Name: {props.name}</p>
//       <p> Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp  />,document.getElementById('app'));