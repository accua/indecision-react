console.log("app.js is running!");

// JSX
const object = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const resetList = (e) => {
  e.preventDefault();
  object.options = [];
  renderApp();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * object.options.length);
  const option = object.options[randomNum];
  alert(option);
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    object.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const appRoot = document.getElementById('app')

const renderApp = () => {
  const template = (
    <div>
      <h1>{object.title}</h1>
      {object.subtitle && <p>{object.subtitle}</p>}
      <p>{object.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={object.options.length === 0} onClick={makeDecision}>What should I do?</button>
    <button onClick={resetList}>Remove All</button>
    <ol>
      {
        object.options.map((item) => <li key={item}>{item}</li>)
      }
    </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
