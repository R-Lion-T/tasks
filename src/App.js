import Card from 'react-bootstrap/Card';
import ListItem from "./components/ListItem";
import ListGroup from 'react-bootstrap/ListGroup';
function App() {
  return (
    <div className="container">
      <Card style={{ width: '30rem', margin:"50px auto", padding:"1rem" }}>
          <h2 className='h2 text-center border-bottom p-2'>Список дел</h2>
          <ListGroup>
            <ListItem task="Сходить магазин" isFinished={true} />
            <ListItem task="Забрать ребенка" isFinished={false} />
          </ListGroup>

      </Card>
    </div>
  );
}

export default App;




