import { deviceTableSchema } from 'constants/tableSchema';
import './app.css';
import { Table } from './Table';
import { deviceListJsonDemo } from 'constants/devices';
import { BhDivider } from '@bh-digitalsolutions/ui-toolkit-react/dist/components';

function App() {
  const tableData = {data:deviceListJsonDemo, length:deviceListJsonDemo.length}
  const isLoading = false
  const handleRowRedirection = 
    (e: CustomEvent) => {
      if (e.detail.event.key == 'name') {
      }
    }
  return (
    <div className="relative bg-white">
      <Table
        id={`iot-devices`}
        schema={deviceTableSchema}
        widthOffset={180}
        payload={tableData}
        onClick={handleRowRedirection}
        isLoading={isLoading}
        // header={header}
        // options={options}
        // onbhEventSelected={onRowSelectionChange}
        // onHeaderCtaClick={onHeaderCtaClick}
      />
      <BhDivider />
    </div>
  )
}

export default App
