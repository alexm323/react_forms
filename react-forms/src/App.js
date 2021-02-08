import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm'
import ShoppingList from './ShoppingList';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div className="App">
      <UserForm />
      <ShoppingList />
      <SimpleForm />
    </div>
  );
}

export default App;
