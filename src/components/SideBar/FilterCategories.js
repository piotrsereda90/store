 const filterCategories = (filter, products) => {
  switch(filter){
    case 'gun':
      return products.filter(product => product.category ==='gun')
    case 'knife':
      return products.filter(product => product.category ==='knife')
    case 'wardrobe':
      return products.filter(product => product.category ==='wardrobe')
    case 'holster':
      return products.filter(product => product.category ==='holster')
    case 'vest':
      return products.filter(product => product.category ==='vest')
    case 'optics':
      return products.filter(product => product.category ==='optics')
    case 'ammunition':
      return products.filter(product => product.category ==='ammunition')
  default :return products
    }
}
export default filterCategories;