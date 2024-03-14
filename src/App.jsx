import { useState } from 'react';
import './App.css';
import Educations from './Educations';
import Others from './Others';
import WorkExperiences from './WorkExperiences';
import Comment from './components/Comment';
import Profile from './components/Profile';
import useNode from './hooks/useNode';
import './styles.css';
import myFaceLogo from '/myFace.png';

const comments = {
  id: 1,
  items: []
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = {...finalStructure};
    setCommentsData(temp);
  };

  return (
    <main>
      <div>
        <img src={myFaceLogo} width = "550" height = "400" classname="logo" alt="Face logo"/>
      </div>
      <h1 className='name'>Tobias Solvang Nesvik</h1>
      <Profile/>
      <WorkExperiences/>
      <Educations/>
      <Others/>
      <div className='card2'>
        <h1 className='name'>Comments</h1>
      <Comment
      handleInsertNode={handleInsertNode}
      handleEditNode={handleEditNode}
      handleDeleteNode={handleDeleteNode}
      comment={commentsData}/>
      </div>
    </main>
  )
}

export default App
