import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      Inside child component
    </ChildAsFC>
  );
};

export default Parent;
