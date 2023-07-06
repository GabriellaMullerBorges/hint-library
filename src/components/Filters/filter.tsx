import React from 'react';
import './filter.scss';

interface Props {
  filter: string;
  setFilter: (value: string) => void;
}

const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className='filter'>
      <div className="filter-options">
        <div >
          <select className="filtro-categorias" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas as categorias</option>
            <option value="Ficção">Ficção</option>
            <option value="Não-Ficção">Não-Ficção</option>
            <option value="Profissional">Profissional</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
