import SchoolBoardData from './components/SchoolBoardData';
import SchoolBoard from './components/SchoolBoard';

function App() {
  const data = SchoolBoardData.map(board => (
    <SchoolBoard id={board.id} category={board.category} post={board.post} />
  ));
  return <div>{data}</div>;
}

export default App;
