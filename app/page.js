"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [toDoList, settoDoList] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!(title === "" && desc === "")) {
      settoDoList([...toDoList, { title, desc }]);
    }
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (indx) => {
    let copyToDoList = [...toDoList];
    copyToDoList.splice(indx, 1);
    settoDoList(copyToDoList);
    document.querySelector("li h3").classList.remove("line-through");
    document.querySelector("li p").classList.remove("line-through");
  };

  const completeHandler = (indx) => {
    let el = document.querySelectorAll("li")[indx];
    el.querySelector("h3").classList.add("line-through");
    el.querySelector("p").classList.add("line-through");
  };

  let renderTask = <h1>No Task Availabe</h1>;

  if (toDoList.length > 0) {
    renderTask = renderTask = toDoList.map((list, i) => {
      return (
        <li
          key={i}
          className="w-4/5 bg-black rounded-md flex justify-between items-center py-2 px-3 text-white mb-2 "
        >
          <h3 className="font-bold">{list.title}</h3>
          <p className="text-slate-300">{list.desc}</p>
          <button
            className="py-1 px-3 bg-blue-500 rounded-lg font-bold transition-all duration-500 ease-in-out hover:text-red-600 hover:bg-white"
            onClick={() => {
              completeHandler(i);
            }}
          >
            Complete
          </button>
          <button
            className="py-1 px-3 bg-red-600 rounded-lg font-bold transition-all duration-500 ease-in-out hover:text-red-600 hover:bg-white"
            onClick={() => {
              deleteHandler();
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div className="bg-black h-lvh">
        <h1 className="text-6xl font-bold text-center  text-blue-500  py-3">
          To Do List
        </h1>
        <form className="h-20  w-full mt-6 flex  justify-around items-center bg-white  p-3">
          <input
            className="w-1/4 bg-slate-800 text-white rounded border-2  border-blue-500 shadow-gray-950 shadow-lg p-2"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            className="w-1/4 bg-slate-800 text-white rounded border-2 border-blue-500 shadow-gray-950 shadow-lg p-2"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <button
            className="w-1/12 bg-blue-500 py-1 rounded-md text-white font-bold transition-all duration-300  hover:bg-slate-800"
            onClick={handleClick}
          >
            Add
          </button>
        </form>
        <hr className="w-full h-2 bg-blue-500 mt-8"></hr>
        <div
          id="result-container"
          className="w-full bg-white text-black mt-8 py-4 "
        >
          <ul
            id="result"
            className="flex flex-col justify-center items-center mx-auto"
          >
            {renderTask}
          </ul>
        </div>
      </div>
    </>
  );
}
