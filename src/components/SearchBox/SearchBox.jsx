import s from "./SearchBox.module.css";

const SearchBox = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
