import React from 'react';
import { Table, Tooltip } from 'react-bootstrap';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

const SocialMediaPerformance = () => {

    const data = [
        {
          name: 'Week 01',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Week 02',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Week 03',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Week 04',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Week 05',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Week 06',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Week 07',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='container firstLastMain'>
            <h5 className='salesHeading'>Lorem Ipsum is simply dummy text of <br /> the printing and typesetting</h5>
            <p className='text-center textCommon mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore </p>
            


           <div className="graphDiv">
           <div className="graphDiv">
           <div className='col-md-9'>          
           <p className='text-start ms-2 revenueText'>Revenue from Facebook Ads</p> 
           <LineChart
                width={600}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
            </LineChart>
           </div>
           <div className="text-div col-md-3 totaldataInfo">
             <div className="logoipsum">
               <h4 className='text-danger totalamount text-start'>$3.455</h4>
               <p className='text-start revenueText'>Tracked by Logoipsum Data</p>
             </div>
             <div className="facebook">
               <h4 className='text-success totalamount text-start'>$3.455</h4>
               <p className='text-start revenueText'>Reported by Facebook Ads</p>
             </div>
             
           </div>
           </div>
           </div>
           <div className="w-75 mx-auto">
           <div className="row my-5">
            <div className="col-md-6">
               <p className='text-center revenueText'>Facebook data</p>
                <Table bordered >
                    <thead className='tableHead'>
                        <tr>
                        <th>Ad name</th>
                        <th>Orders</th>
                        <th>ROAS</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        <tr>
                            <td>All_25+_Static_split_screen</td>
                            <td>10</td>
                            <td>3.6</td>
                        </tr>
                        <tr>
                            <td>M_25+_Static_split_screen_2</td>
                            <td>9</td>
                            <td className='fistReports'>3.1</td>
                        </tr>
                    </tbody>
                </Table>
             </div>


             <div className="col-md-6">
             <p className='text-center revenueText'>Logoipsum data</p>

             <Table bordered >
                    <thead className='tableHead'>
                        <tr>
                        <th>Ad name</th>
                        <th>Orders</th>
                        <th>ROAS</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        <tr>
                            <td>All_25+_Static_split_screen</td>
                            <td>12</td>
                            <td>3.2</td>
                        </tr>
                        <tr>
                            <td>M_25+_Static_split_screen_2</td>
                            <td>2</td>
                            <td className='LastReports'>1.5</td>
                        </tr>
                    </tbody>
                </Table>
             </div>
           </div>
           </div>
        </div>
    );
};

export default SocialMediaPerformance;