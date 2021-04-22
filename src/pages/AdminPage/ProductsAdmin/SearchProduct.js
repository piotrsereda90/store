import React from 'react';


const SearchProduct = ({productsList, searchProduct, categories}) => {

  const handelChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase()
    let products = [...productsList]
    products = products.filter(product => product.name.toLowerCase().includes(searchText))
    searchProduct(products)
  }
  const handelChangeCategory = (e) => {
    const selectCategory = e.target.value
    let products = [...productsList]
    selectCategory === 'all'
    ? searchProduct(productsList)
    : products = products.filter(product => product.category === selectCategory)
    searchProduct(products)
  }

  const selectCategory = () => (
    <select form="categories" onChange={handelChangeCategory}>
      {categories.map((category, key) => (
        <option key={`category${key}`}value={category.category}>{category.category}</option>
      ))}
    </select>
  )
  return (
  <form id='categories' >
    <input
    onChange={handelChangeSearch}
    type='search'
    placeholder='Search product'
      />
    {selectCategory()}
  </form>
  );
}
 
export default SearchProduct;