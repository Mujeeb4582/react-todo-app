import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodoList';

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: true,
        },
      ],
    };

    this.handleChange = (id) => {
      this.setState((pState) => ({
        todos: pState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    this.delTodo = (id) => {
      const { todos } = this.state;
      this.setState({
        todos: [
          ...todos.filter((todo) => todo.id !== id),
        ],
      });
    };

    this.addTodoItem = (title) => {
      const { todos } = this.state;
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
      });
    };

    this.setUpdate = (updatedTitle, id) => {
      const { todos } = this.state;
      this.setState({
        todos: todos.map((todo) => {
          if (todo.id === id) {
            // eslint-disable-next-line no-param-reassign
            todo.title = updatedTitle;
          }
          return todo;
        }),
      });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
