const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options:[ 'Darshak', 'Mehta']
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault(); //saves the full page refresh and also does not put data inside the url
    //console.log('Form submitted');
  
    const option = e.target.elements.option.value;
    //console.log(option);
  
    if(option) {
      app.options.push(option);
      e.target.elements.option.value = "";
      renderIndecisionApp();
    }
  };
  
  const removeAll = () => {
    app.options.length = 0; //way 1
    app.options = []; //way 2
    renderIndecisionApp();
  };
  
  const appRoot = document.getElementById('app');
  
  const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
  };
  
  const renderIndecisionApp = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do? </button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
         {
           app.options.map((option) => {
              return <li key={option}> Item : {option}</li>;
           })
         }
        </ol>
        <form onSubmit={onFormSubmit}> 
          <input type = "text" name="option"/>
          <button>Add Option</button>
        </form> 
      </div>
    );
    //just reference {onFormSubmit} do not call {onFormSubmit()}
    ReactDOM.render(template, appRoot);
    
  }
  
  renderIndecisionApp();