class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>{ this.state.visible ? "Hide Details" : "Show Details" }</button>
        <h3>{ this.state.visible && "DETAILS BITCH!" }</h3>
      </div>
    )
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));



// console.log("build it");
//
// const app = {
//   title: "Visiblity Toggle",
//   show: false
// }
//
// const toggle = () => {
//   app.show === false ? app.show = true : app.show = false;
//   renderApp();
// }
//
// const appRoot = document.getElementById("app")
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggle}>{app.show === false ? "Show Details" : "Hide Details"}</button>
//       <h3>{app.show === true && 'Details'}</h3>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }
//
// renderApp();
