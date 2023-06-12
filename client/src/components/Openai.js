// import { useState } from 'react';
// import axios from 'axios';
// // import dotenv from 'dotenv';
// // dotenv.config();

// // require('dotenv').config()

// function Openai() {
//   const[cbResponse, setCbResponse] = useState('')
//   const [userInput, setUserInput] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSendData = async(event) => {
//     event.preventDefault()
//     const url = 'https://api.openai.com/v1/chat/completions';
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_KEY}`
//     };

//     const data = {
//       model: "gpt-3.5-turbo-0301",
//       messages: [{"role": "user", "content": userInput}]
//     };

//     setIsLoading(true);

//     axios.post(url, data, {headers:headers}).then((response) => {
//       console.log(response);
//       setUserInput((preUserInput) => [...preUserInput, { type: 'bot', message: response.data.choise[0].message.content}]);
//       setIsLoading(false);
//     }).catch((error) => {
//       setIsLoading(false);
//       console.log(error)
//     })
//   }


//   return (
//     <div className="container mx-auto max-w-[700px]">
//       <div className="flex flex-col h-screen bg-gray-900">
//         <h1 className="bg-gradient-to-r from-green-500 to-green-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">ChatGPT</h1>
//         <div className="flex-grow p-6">
//           <div className="flex flex-col space-y-4">
//           <div key={userInput} className={`flex ${
//             userInput.type === 'user' ? 'justify-end' : 'justify-start'
//             }`}>
//             <div className={`${
//               userInput.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
//             } rounded-lg p-4 text-white max-w-sm`}>
//             {userInput.message}
//             </div>
//             </div>
//             {
//               isLoading &&
//               <div key={cbResponse.length} className="flex justify-start">
//                   <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
//                   </div>
//               </div>
//             }
//       </div>
//         </div>
//         <form onSubmit={handleSendData} className="flex-none p-6">
//           <div className="flex rounded-lg border border-gray-700 bg-gray-800">  
//         <input type="text" className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none" placeholder="Type your message..." value={userInput} onChange={(e) => setUserInput(e.target.value)} />
//             <button type="submit" className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300">Send</button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Openai;
