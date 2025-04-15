import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  async function fetchData() {
    const data = await fetch("https://fakestoreapi.com/products");

    const result = await data.json();

    setData(result);
    setLoader(false);
  }

  console.log(data);


      
  
  return (
    <>
 <div className="flex justify-center mt-12">
  <button
    className="px-8 py-3 text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:from-indigo-700 hover:to-blue-700 font-semibold tracking-wide"
    onClick={fetchData}
  >
    Fetch Data !
  </button>
</div>
{loader ? (
  <div className="flex justify-center items-center h-64">
    <div className="w-12 h-12 border-4 border-t-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-12">
    {data.map((item, index) => {
      return (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
        >
          <img
            className="w-full h-64 object-contain p-4 bg-gray-50"
            src={item.image}
          />
          <p className="text-xl font-semibold text-gray-800 text-center mt-4 px-4 line-clamp-2">
            {item.title}
          </p>
          <p className="text-gray-600 text-sm text-center mt-2 px-4 pb-6 line-clamp-3">
            {item.description}
          </p>
        </div>
      );
    })}
  </div>
)}
    </>
  )
}

export default App
