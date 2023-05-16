import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
const API_KEY = "Pn3lrkYZUJaEwC8oOKfUVwWYWYHYGZAm";

function SearchedGIF() {
  const [randomGif, SetrandomGif] = useState("");
  const [Loading, SetLoading] = useState(false);
  const [gifValue, SetgifValue] = useState("");

  function inputHandler(event) {
    SetgifValue(event.target.value);
  }

  async function FetchData() {
    if(gifValue === "")
    {
      toast.error("Please Type Your GIF");
    }
    else
    {
      SetLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${gifValue}`;
    const { data } = await axios.get(url);
    const gifData = data.data.images.downsized_large.url;
    SetrandomGif(gifData);
    SetLoading(false);
    }
    
  }
  async function RandomFetchData() {

    SetLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const gifData = data.data.images.downsized_large.url;
    SetrandomGif(gifData);
    SetLoading(false);
  }

  useEffect(() => {
    RandomFetchData();
  }, []);

  return (
    <div className="w-[90%] md:w-[550px] flex flex-col justify-center items-center bg-[#712B75] mx-auto rounded-xl gap-y-4 my-6 px-4">
      <h1 className="text-3xl w-full bg-[#A459D1] rounded-xl text-center text-white font-bold mt-8 py-2">
        Random GIF
      </h1>
      <div className="min-h-[50vh] flex justify-center items-center">

      {Loading ? (
        <div class="lds-hourglass"></div>
      ) : (
        <img src={randomGif} alt="" className="h-[50vh] rounded-xl" />
      )}
      </div>
      <div className="w-full flex justify-between items-baseline gap-x-2 md:gap-x-4">
      <button
        onClick={()=>{RandomFetchData();}}
        className="text-sm md:text-xl w-full bg-[#6155A6] rounded-xl text-center text-white font-bold py-2"
      >
        Random
      </button>
      <label className="w-full relative">
      <input type="text" onChange={inputHandler} placeholder="Search your GIF" value={gifValue} className="w-full rounded-xl text-start md:text-center text-black bg-[#28DF99] text-sm md:text-xl font-bold py-2 px-2 placeholder:text-green-900" />
        <p onClick={()=>{FetchData();}} className="cursor-pointer absolute top-1 right-1 md:top-2 md:right-2 text-xl">🔍</p>
      </label>
      </div>
      <button
        onClick={()=>{FetchData();}}
        className="text-3xl w-full bg-[#FFB84C] border-b-2 border-black rounded-xl text-center text-white font-bold mb-8 py-2 hover:bg-green-600 transition-all duration-200 ease-linear"
      >
        Generate
      </button>
    </div>
  );
}

export default SearchedGIF;
