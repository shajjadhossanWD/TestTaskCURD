import React from 'react';
import { Table } from 'react-bootstrap';

const WeekData = () => {
    return (
        <div className='container tableSectionDiv'>
            <Table bordered >
            <thead className='tableHeadWeek'>
                <tr>
                <th>Date</th>
                <th>Users</th>
                <th>Week 0</th>
                <th>Week 1</th>
                <th>Week 2</th>
                <th>Week 3</th>
                <th>Week 4</th>
                <th>Week 5</th>
                <th>Week 6</th>
                <th>Week 7</th>
                <th>Week 8</th>
                </tr>
            </thead>
            <tbody className='tableBodyWeek'>
               <tr>
                    <td className='td1'>06-17 - 06-23</td>
                    <td className='td1'>1254</td>
                    <td className='td2'>$227</td>
                    <td className='td2'>$224</td>
                    <td className='td2'>$211</td>
                    <td className='td2'>$242</td>
                    <td className='td3'>$255</td>
                    <td className='td3'>$262</td>
                    <td className='td3'>$281</td>
                    <td className='td1'>$294</td>
                    <td className='td1'>$309</td>
                </tr>
               <tr>
                    <td className='td1'>06-24 - 06-30</td>
                    <td className='td1'>1657</td>
                    <td className='td2'>$221</td>
                    <td className='td2'>$226</td>
                    <td className='td2'>$218</td>
                    <td className='td2'>$241</td>
                    <td className='td4'>$259</td>
                    <td className='td4'>$255</td>
                    <td className='td4'>$288</td>
                    <td className='td4'>$298</td>
                    <td className='td1'></td>
                </tr>
               <tr>
                    <td className='td1'>06-31- 07-06</td>
                    <td className='td1'>1387</td>
                    <td className='td2'>$224</td>
                    <td className='td2'>$220</td>
                    <td className='td2'>$219</td>
                    <td className='td2'>$244</td>
                    <td className='td3'>$251</td>
                    <td className='td3'>$261</td>
                    <td className='td2'>$286</td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                </tr>
               <tr>
                    <td className='td1'>07-07 - 07-14</td>
                    <td className='td1'>1456</td>
                    <td className='td1'>$219</td>
                    <td className='td1'>$228</td>
                    <td className='td1'>$215</td>
                    <td className='td1'>$247</td>
                    <td className='td1'>$244</td>
                    <td className='td1'>$268</td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                </tr>
               <tr>
                    <td className='td1'>07-15 - 07-21</td>
                    <td className='td1'>1189</td>
                    <td className='td2'>$217</td>
                    <td className='td2'>$224</td>
                    <td className='td2'>$213</td>
                    <td className='td2'>$249</td>
                    <td className='td4'>$256</td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                </tr>
               <tr>
                    <td className='td1'>07-22 - 07-28</td>
                    <td className='td1'>1223</td>
                    <td className='td3'>$211</td>
                    <td className='td3'>$227</td>
                    <td className='td3'>$212</td>
                    <td className='td4'>$237</td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                </tr>
               <tr>
                    <td className='td1'>07-29 - 08-04</td>
                    <td className='td1'>1337</td>
                    <td className='td4'>$209</td>
                    <td className='td4'>$221</td>
                    <td className='td4'>$216</td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                    <td className='td1'></td>
                </tr>
            </tbody>
        </Table>
        </div>
    );
};

export default WeekData;