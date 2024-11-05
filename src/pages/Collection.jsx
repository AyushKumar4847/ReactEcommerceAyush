import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { Title } from '../components/Title';
import { ProductItem } from '../components/ProductItem';

export const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const { search, showSearch } = useContext(ShopContext);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'High-Low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [search, showSearch, category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-5 md:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>
        {/* category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-xs md:text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-xs md:text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* PRODUCT SORT */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Sort by: Relavent</option>
            <option value='Low-High'>Sort by: Low-High</option>
            <option value='High-Low'>Sort by: High-Low</option>
          </select>
        </div>

        {/* map products */}
        {filterProducts.length > 0 ? (
          <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 md:gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))}
          </div>
        ) : (
          <p className='text-center text-lg mt-10'>No products found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};
