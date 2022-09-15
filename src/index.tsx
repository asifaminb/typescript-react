import ReactDOM from 'react-dom';
import Parent from './props/Parent';
// import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
