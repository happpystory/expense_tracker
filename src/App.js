import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransanction } from './components/AddTransanction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="header__section">
        <Header />
      </div>
      <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransanction />
      </div>
    </GlobalProvider>
  );
}

export default App;
