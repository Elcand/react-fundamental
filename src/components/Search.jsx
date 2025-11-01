import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState('');
  
  const onSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  // const onSearchChange = (event) => {
  //   setSearch(event.target.value);
  // }

  return (
    <>
      <div>
        Cari Artikel : <input onChange={onSearchChange} />{" "}
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
    </>
  );
}

export default Search;