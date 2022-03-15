import "./App.css";
import BasicTable from "./components/Tables/BasicTable";
import SortingTable from "./components/Tables/SortingTable";
import FilteringTable from "./components/Tables/FilteringTable";
import PaginationTable from "./components/Tables/PaginationTable";
import RowSelectionTable from "./components/Tables/RowSelection";
import ColumnOrder from "./components/Tables/ColumnOrder";
import ColumnHiding from "./components/Tables/ColumnHiding";

function App() {
  return (
    <div className="App">
      <ColumnHiding />
    </div>
  );
}

export default App;
