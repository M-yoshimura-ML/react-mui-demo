import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { MuiButton } from './components/MuiButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';
import { MuiPicker } from './components/MuiPicker';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <MuiTypography />
        <MuiButton />
        <MuiTextField />
        <MuiSelect />
        <MuiPicker />
      </div>
    </LocalizationProvider>
  );
}

export default App;
