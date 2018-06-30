import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };
    handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }))
    };
    handleDeleteOptions= () => {
      //way 1
      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // });
      //way 2
      this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
          options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    };
    handlePick = () => {
      const randomNumber = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumber];
      this.setState (() => ({selectedOption: option}));
    };
    handleAddOption = (option) =>{
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
    
    render () {
      const subtitle = 'Put your life in the hands of a computer';
      return (
        <div>
          <Header subtitle = {subtitle}/>
          <div className="container">
            <Action 
              handlePick = {this.handlePick}
              hasOptions = {this.state.options.length > 0}
            />
            <div className ="widget">
              <Options 
                options = {this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
              />
              <AddOption 
                handleAddOption = {this.handleAddOption}
              />
            </div>
          </div>
          <OptionModal 
            selectedOption = {this.state.selectedOption}
            handleClearSelectedOption = {this.handleClearSelectedOption}
          />
        </div>
      );
    }
  }
  
  
 

  
  
  
  