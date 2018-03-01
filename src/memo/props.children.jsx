const Layout1 = props => (
  <div>
      <p>header</p>
      {props.template}
      <p>footer</p>
    </div>
);

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
);

// ReactDOM.render(<Layout1 template={template}/>, document.getElementById('app'));

const Layout2 = props => (
  <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
);

// ReactDOM.render(<Layout2><p>inline</p></Layout2>, document.getElementById('app'));

// ReactDOM.render((
//   <Layout2>
//     <p>inline</p>
//   </Layout2>
// ), document.getElementById('app'));
