console.log('App is runing');

// JSX JavaScript XML
// error: var templete = <h1>This is JSX from app.js hahaha</h1><p>This is some info</p>;
// one root element(wrapper div), one love :)
var templete = (
  <div>
    <h1>Another RayJune</h1>
    <p>motto: Gentleman is gentle.</p>
    <p>Hobby(except coding)</p>
    <ul>
      <li>Football</li>
      <li>Man UTD</li>
      <li>Zlatan 10</li>
    </ul>
  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templete, appRoot);