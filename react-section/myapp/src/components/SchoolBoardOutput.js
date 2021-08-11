import SchoolBoardData from './components/SchoolBoardData';
import SchoolBoard from './components/SchoolBoard';

const SchoolBoardOutput = () => {
  const data = SchoolBoardData.map(board => (
    <SchoolBoard id={board.id} category={board.category} post={board.post} />
  ));
  return <div>{data}</div>;
};

export default SchoolBoardOutput;
