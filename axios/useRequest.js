import { get, post, put, del } from './request';

// GET example
const fetchData = async () => {
  const data = await get('/api/data');
  console.log(data);
};

// POST example
const postData = async () => {
  const newData = { name: 'John', age: 30 };
  const response = await post('/api/data', newData);
  console.log(response);
};

// PUT example
const updateData = async () => {
  const updatedData = { id: 1, name: 'John Doe', age: 32 };
  const response = await put('/api/data/1', updatedData);
  console.log(response);
};

// DELETE example
const deleteData = async () => {
  const response = await del('/api/data/1');
  console.log(response);
};