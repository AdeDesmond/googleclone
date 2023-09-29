"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomsearchwordLoading, setRandomSearchwordLoading] = useState(false);
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function handlerandomSearch() {
    setRandomSearchwordLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    if (!response) return;
    const singleWord = data[0];
    router.push(`/search/web?searchTerm=${singleWord}`);
    setRandomSearchwordLoading(false);
  }
  return (
    <>
      <form
        className="flex focus-within:shadow-md w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        onSubmit={handleSubmit}
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomsearchwordLoading}
          onClick={handlerandomSearch}
          className="btn disabled:opacity-80 disabled:cursor-wait"
        >
          {randomsearchwordLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="text-center h-6 "
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
