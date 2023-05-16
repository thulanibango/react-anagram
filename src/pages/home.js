import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
// import allAnagram from '../anagram/allAnagram';

export default function Home() {
  const [anagram, setAnagram] = useState([]);
  const [anagramArray, setAnagramArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [appendData, setAppendData] = useState({});
  const [responseData, setResponseData] = useState(null);

  const handleButtonClick = async () => {
    try {
      axios.get(`http://localhost:8081/anagrams/all`)
        .then((response) => {
          console.log(response.data)
        })
    } catch (error) {
      console.error(error);
    }
  };

  const handleApeendChange = (event) => {
    const  {name, value}  = event.target;
    setAppendData({ ...appendData, [name]: value.toUpperCase() });

  };
  var myresponse =  document.getElementById("myResponse")
  const appendAnagram = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/anagrams/add', appendData)
      .then(response => myresponse.innerHTML = response.data)
      .catch(error => console.error(error));
  };
    const handleSubmit = (event) => {
      event.preventDefault();
      const newSelectedOption = event.target.value;
      setSelectedOption(newSelectedOption);
      axios.get(`http://localhost:8081/anagrams/${newSelectedOption}`)
        .then((response) => {
          const [resTime, resObject, resTotal] = Object.values(response.data);
          const arr = Object.entries(resObject).map(([key, value]) => `${value} anagrams: ${key}`);
          const respArr = [resTime, resTotal, newSelectedOption];
          setAnagram(respArr);
          setAnagramArray(arr);
          localStorage.setItem('myData', arr);
        })
        .catch((error) => {
          console.error(error);
        });
      };

      
  const numPages = Math.ceil(anagramArray.length / 10);

  // Get the current page of items
  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = anagramArray.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
// Determine the range of pages to display
let startPage, endPage;
if (numPages <= 10) {
  // Less than 10 total pages so show all
  startPage = 1;
  endPage = numPages;
} else {
  // More than 10 total pages so calculate start and end pages
  if (currentPage <= 6) {
    startPage = 1;
    endPage = 10;
  } else if (currentPage + 4 >= numPages) {
    startPage = numPages - 9;
    endPage = numPages;
  } else {
    startPage = currentPage - 5;
    endPage = currentPage + 4;
  }
}

// Generate an array of page numbers to display
const pageNumbers = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

 
  return (
    <div className="container">
      <br/>
      <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-primary mx-2">Submit</button>
              {/* <Link to="/anagram/allAnagram'" className="btn btn-outline-warning mx-2">Request all data</Link> */}
             
              <button className="btn btn-outline-warning mx-2" onClick={handleButtonClick}>Fetch Data</button>
              {/* {responseData && <p>{responseData}</p>} */}
            
            </div>

        </div>
      <div className="card">
        <div className="card-header">Anagram Calculator</div>
        <div className="card-body">
          <h5 className="card-title">
            Words with the character length of {anagram[2]} had {anagram[1]} anagrams
          </h5>
          <p className="card-text">
            The it took for the algorythm to compute is <span style={{color:"#FF0000", fontStyle:"italic"}}>{anagram[0]}</span >ms
          </p>    
            <select className="form-select" aria-label="Default select example" value={selectedOption} onChange={handleSubmit}>
                <option >Select length words</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">four</option>
                <option value="5">five</option>
                <option value="6">six</option>
                <option value="7">seven</option>
                <option value="8">eight</option>
                <option value="9">nine</option>
                <option value="10">ten</option>
                <option value="11">eleven</option>
                <option value="12">twelve</option>
                <option value="13">thirteen</option>
                <option value="14">fourten</option>
                <option value="15">fifteen</option>
            </select>
        <br/>
        <br/>
          <form onSubmit={appendAnagram}>
            <div className="mb-2">
                <input type="text" className="form-control" name="name" onChange={handleApeendChange} id="anagram" aria-describedby="emailHelp" placeholder='Add Anagram'/>
                <p id='myResponse'></p>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        

        </div>
      </div>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Anagram Number : Anagram Character</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((ana, index) => (
              <tr key={index}>
                <td>{ana}</td>
                <td>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pageNumbers.map((page) => (
              <li key={page} className='page-item'>
                {currentPage === page ? (
                
                <button className="page-link" >
                  {page}
                </button>
              ) : (
                <button className="page-link" onClick={() => handleClick(page)}>
                  {page}
                </button>
              )}
               
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
