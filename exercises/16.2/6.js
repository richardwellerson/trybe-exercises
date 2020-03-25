const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message))
});
