import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText);
      setInputText('');
    }
  }

  return (
    <C.Container>
      <div className="image">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ccc" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
      </div>

      <input 
        type="text" 
        placeholder="Adicione uma tarefa" 
        value={ inputText }
        onChange={ e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />

    </C.Container>
  ); 
}