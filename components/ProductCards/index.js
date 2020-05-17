import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductCard from '../ProductCard/index';

const Row = styled.div`
  margin: 1em -5px;
`;

const Column = styled.div`
  float: left;
  width: 25%;
  padding: 0 10px;
`;

const ProductCards = ({ products }) => (
  <Row>
    {
      products.map(({ title, picture, price }) => (
        <Column>
          <ProductCard title={title} picture={picture} price={price} />
        </Column>
      ))
    }
  </Row>
);

ProductCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

};

export default ProductCards;
