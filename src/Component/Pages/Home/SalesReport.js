import React, { useEffect, useState,  } from 'react';
import { Table } from 'react-bootstrap';

const SalesReport = () => {

    const [data, setData] = useState([]);
    let [loading] = useState(true);

    useEffect(()=>{
        fetch('./Sales.json')
        .then(res => res.json())
        .then(result =>{
            setData(result)
            console.log(result)
        })
    },[])

    return (
        <div className='container'>
           <h5 className='salesHeading'>Ut enim ad minima veniam, quis nostrum <br /> exercitationem ullam corporis suscipit</h5>
          <Table bordered >
            <thead className='tableHead'>
                <tr>
                <th>Source</th>
                <th>Ad</th>
                <th>Cost</th>
                <th>Sales</th>
                <th>First time <br /> customers</th>
                <th>Revenue</th>
                <th>ROAS</th>
                <th>CAC</th>
                <th>F.T. ROAS</th>
                </tr>
            </thead>
            <tbody className='tableBody'>
            {
                data.map(allData => <tr key={allData.id}>
                    <td>{allData.source}</td>
                    <td>{allData.ad}</td>
                    <td>{allData.cost}</td>
                    <td>{allData.sales}</td>
                    <td>{allData.firstCustomer}</td>
                    <td>{allData.revenue}</td>
                    <td style={ (allData.roas > 4) ? { background:'#93D1B5'} : {} }>{allData.roas}</td>
                    <td>{allData.cac}</td>
                    <td style={ (Math.round(allData.ftroas) >= 4) ? { background:'#93D1B5'} : {} }>{allData.ftroas}</td>
                </tr>)
            }
               
              
            </tbody>
        </Table>
        </div>
    );
};

export default SalesReport;