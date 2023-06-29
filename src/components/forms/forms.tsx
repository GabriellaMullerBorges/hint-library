import {useState} from 'react'
import './forms.scss';
type AddLivroFn = (title: string, author: string, category: string, person: string) => void;

interface LivroFormProps {
  addLivro: AddLivroFn;
}

function LivroForm({ addLivro }: LivroFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    console.log(title, author, category, name);

    if(!title || !author || !category || !name){
      alert ("Algum campo não foi preenchido corretamente");
      return;
    } else {
      addLivro(title, author, category, name);
    }
    setTitle("");
    setAuthor("");
    setCategory("");
    setName("");
  }

  return (
    <div className='form'>
        <form className='form-content' onSubmit={handleSubmit}>
            <input type='text' placeholder='Título do livro' className='titulo' value={title} onChange={(e)=> setTitle(e.target.value)}></input>
            <input type='text' placeholder='Autor' className='autor' value={author} onChange={(e)=> setAuthor(e.target.value)}></input>
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="profissional">Profissional</option>
                <option value="ficcao">Ficção</option>
                <option value="nao-ficcao">Não-Ficção</option>
            </select>
            <input type='text' placeholder='Seu nome' className='nome' value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button type="submit">OK</button>
        </form>
        </div>
  )
}

export default LivroForm