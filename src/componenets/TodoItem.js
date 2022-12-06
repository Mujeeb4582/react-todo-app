import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
        {' '}
        <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: (PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
