const User1 = () => {
  return (
    <div>
      <p>Name: {this.props.name}</p>
      {/*stateless functional components do not have access to `this` obviously are arrow functions do not either*/}
      <p>Age: </p>
    </div>
  );
};

// so:

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

// They are faster than our class based components
/* 
  So when we can we should be using them there faster because they don't come with all of the overhead
  and baggage of being a class and having to extend to react component(for example: state)
*/

ReactDOM.render(<User name={'RayJune'} age={'21'}/>, document.getElementById('app'));
