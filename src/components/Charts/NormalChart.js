import './normal.scss'
import { LineChart, Line,Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {name: "Ocak", Total : 1500},
  {name: "Şubat", Total : 1900},
  {name: "Mart", Total : 3400},
  {name: "Nisan", Total : 1600},
  {name: "Mayıs", Total : 2700},
  {name: "Haziran", Total : 2700},
  {name: "Temmuz", Total : 2900},
  {name: "Ağustos", Total : 3100},
  {name: "Eylül", Total : 4500},
  {name: "Ekim", Total : 3700},
  {name: "Kasım", Total : 2766},
  {name: "Aralık", Total : 7520},
];
const NormalChart = () => {
  return (
    <div className='normal'>
<p className='title'>12 Ayın Toplam Geliri</p>
<ResponsiveContainer width="100%" aspect={2 / 1}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
</AreaChart>
      </ResponsiveContainer>




    </div>
  )
}

export default NormalChart