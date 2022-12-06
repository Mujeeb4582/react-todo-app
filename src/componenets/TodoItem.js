import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

class TodoItem extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;

    const { editing } = this.state;

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#090909',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />
          {' '}
          <button type="button" onClick={() => deleteTodoProps(todo.id)}>
            Delete
          </button>
          <span style={todo.completed ? completedStyle : null}>
            {todo.title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={todo.title}
          onChange={(e) => {
            setUpdate(e.target.value, todo.id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
