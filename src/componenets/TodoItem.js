import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;

    const completedStyle = {
      fontStyle: 'italic',
      color: '#090909',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
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
};

export default TodoItem;
