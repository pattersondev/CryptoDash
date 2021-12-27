import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="app">
      <h1>Crypto Dash</h1>
      <div className="app-wrapper">
      <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
