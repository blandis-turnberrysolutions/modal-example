import * as React from 'react';
import './App.css';
import { Button, Table } from 'semantic-ui-react';
import { MyModal } from './MyModal';
import { MyContent } from './MyContent';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentData, setCurrentData] = React.useState();
  const allData = [0, 'fail', 1];

  return (
    <div className="App">
      <MyModal open={isOpen} onClose={() => setIsOpen(false)}>
        {isOpen && <MyContent testProp={currentData} />}
      </MyModal>
      <Table>
        <Table.Body>
          {allData.map(d => (<Table.Row key={d}>
            <Table.Cell>
              {d}
            </Table.Cell>
            <Table.Cell>
              <Button primary onClick={() => {
                setCurrentData(d);
                setIsOpen(true);
              }}>Test</Button>
            </Table.Cell>
          </Table.Row>))}
        </Table.Body>
      
        </Table>
    </div>
  );
}

export default App;
