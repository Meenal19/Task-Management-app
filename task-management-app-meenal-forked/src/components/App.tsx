import React from "react";
import { observer } from "mobx-react";
import Header from "./header";
import Table from "./table";
import AddTask from "./addTask";
import "./styles.css";

@observer
class TodoListComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { submit: false, filter: "Active" };
  }

  setFilter = (progress) => {
    this.setState({
      filter: progress
    });
  };

  buttonOnClick = () => {
    this.setState({
      submit: !this.state.submit
    });
  };

  render() {
    return (
      <div className="App">
        <Header filter={this.setFilter} selecetedOption={this.state.filter} />
        <Table selecetedOption={this.state.filter} />
        <button className="button" onClick={this.buttonOnClick}>
          Add Task
        </button>
        {this.state.submit ? <AddTask addTasks={this.buttonOnClick} /> : null}
      </div>
    );
  }
}

export default TodoListComponent;
