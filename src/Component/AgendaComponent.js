import React, { useState, useRef } from 'react';
import { Table } from 'react-bootstrap';


// function to check valid email 
const isValidEmail = (email) => {
  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};


const AgendaComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [agendaItems, setAgendaItems] = useState([]);

  //Agenda Object..................

  const agendaRef = useRef({
    items: [],
    addItem: function (item) {
      this.items.push(item);
      console.log(item);
      setAgendaItems([...this.items]);

    },
    updateItem: function (id, updatedItem) {
      this.items = this.items.map(item => (item.id === id ? updatedItem : item));
      setAgendaItems([...this.items]);

    },
    deleteItem: function (id) {
      this.items = this.items.filter(item => item.id !== id);
      setAgendaItems([...this.items]);

    },
  });

  const Agenda = agendaRef.current;


  //Add Function..................
  const handleAddItem = () => {
    if (!isValidInput()) return;

    const newItem = {
      id: Date.now(),
      name,
      email,
      productName,
      price,
    };
    Agenda.addItem(newItem);
    clearInputs();
  };


  //Edit Function...................
  const handleEditItem = (id) => {
    const itemToEdit = Agenda.items.find(item => item.id === id);
    setName(itemToEdit.name);
    setEmail(itemToEdit.email);
    setProductName(itemToEdit.productName);
    setPrice(itemToEdit.price);
    setEditItemId(id);
  };


  //Update Function.................
  const handleUpdateItem = () => {
    if (!isValidInput() || !editItemId) return;
    const updatedItem = {
      id: editItemId,
      name,
      email,
      productName,
      price,
    };
    Agenda.updateItem(editItemId, updatedItem);
    clearInputs();
    setEditItemId(null);
  };

  //Delete Function................
  const handleDeleteItem = (id) => {
    Agenda.deleteItem(id);
    // Trigger a re-render by updating state
    setEditItemId(null);
  };


  //Validation.....................
  const isValidInput = () => {
    if (!name.trim() || !email.trim() || !productName.trim() || isNaN(price)) {
      alert('Please fill all fields correctly.');
      return false;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    
    return true;
  };


  
  //For clear input...............
  const clearInputs = () => {
    setName('');
    setEmail('');
    setProductName('');
    setPrice('');
  };
 
  //Export function...............
  const handleExport = () => {
    const dataToExport = JSON.stringify(Agenda.items);
    const blob = new Blob([dataToExport], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agenda.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  //import function....................
  const handleImport = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        // Assuming the imported data is an array of items
        importedData.forEach(item => Agenda.addItem(item));
        alert('Agenda imported successfully!');
      } catch (error) {
        alert('Error importing agenda. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleImportButtonClick = () => {
    document.getElementById('fileInput').click();
  };


 console.log(Agenda.items)
  return (
    <div className='container pt-4'>
      <h1 className='text-white mt-4'>ADD USER DATA</h1>
      <div className='inputData mx-auto'>
        <input
          type="text"
          className='form-control mt-3'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          className='form-control mt-3'
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={productName}
          className='form-control mt-3'
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={price}
          className='form-control mt-3'
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <div className='mt-3'>
        <button className='btn btn-danger me-2' onClick={editItemId ? handleUpdateItem : handleAddItem}>
          {editItemId ? 'UPDATE ITEM' : 'ADD ITEM'}
        </button>
        <button className='btn btn-primary me-2 text-uppercase' onClick={handleExport}>Export Agenda</button>
        <input type="file" id="fileInput" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        <button className='btn btn-success importBtn text-uppercase' onClick={handleImportButtonClick}>Import Agenda</button>
        </div>
      </div>
    <div className="mt-5 pb-5 mx-auto">
    <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Products</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Agenda.items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.productName}</td>
              <td>${item.price}</td>
              <td>
                <div className='ActionDiv'>
                <button className=' btn btn-success me-1' onClick={() => handleEditItem(item.id)}><i class="fas fa-edit"></i></button>
                <button className='btn btn-danger' onClick={() => handleDeleteItem(item.id)}><i class="fas fa-trash-alt"></i></button>
                </div>
              </td>
            </tr>
          ))}
        
        </tbody>
      </Table>
      </div>
    </div>
  );
};

export default AgendaComponent;
