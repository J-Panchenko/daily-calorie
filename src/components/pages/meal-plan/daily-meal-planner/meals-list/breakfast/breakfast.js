import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromBreakfast } from '../../../../../../actions';
import SearchPanel from '../../search-panel';
import ProductItem from '../product-item/product-item';
import './breakfast.css';

const Breakfast = () => {
  const products = useSelector(({ meals: { breakfast } }) => breakfast);
  const dispatch = useDispatch();

  const product = products.map((prod) => {
    const {
      id, foodName, carbs, protein, fat, kcal, portion,
    } = prod;
    const productId = id;
    const onClick = () => dispatch(removeProductFromBreakfast(productId));
    return (
      <ProductItem
        id={id}
        foodName={foodName}
        carbs={carbs}
        protein={protein}
        fat={fat}
        kcal={kcal}
        portion={portion}
        onClick={() => onClick()}
      />

    );
  });

  return (
    <div>
      <SearchPanel />
      <table className="table">
        <tbody className="table-body">
          {product}
        </tbody>
      </table>
    </div>
  );
};

export default Breakfast;