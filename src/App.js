import {useState} from 'react';
import {useGetGoodsQuery, useAddProductMutation} from './redux';

function App() {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const {data = [], isLoading} = useGetGoodsQuery(count);
  const [addProd, {isError}] = useAddProductMutation();

  const handleAddProduct = async () => {
      if (newProduct) {
        await addProd({name: newProduct}).unwrap();
        setNewProduct('');
      }
  };
  
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <input
          type='text'
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add product</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="''">all</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
