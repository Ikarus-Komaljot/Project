// 'use client'

// import { useEffect, useState } from "react";

// export default function Modals() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000')
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData));
//   }, []);
// console.log(data)
//   return (
//     <div>
//       <h1>Hello from Next.js</h1>
//       <p>Response from FastAPI: {JSON.stringify(data)}</p>
//     </div>
//   );
// }
// 'use client'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
  
//   export default function Modals(){
//     const notify = () => toast("Wow so easy!");

//     return (
//       <div>
//         <button onClick={notify}>Notify!</button>
//         <ToastContainer />
//       </div>
//     );
//   }