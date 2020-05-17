import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
    text-align: center;
  font-family: arial;
`;

const Image = styled.img`
  width: 100%;
`;

const Price = styled.p`
  color: grey;
  font-size: 1.5em;
  padding-bottom: 1em ;
`;

const Heading = styled.h1`
  font-size: 2em;
  padding: 0.5em 0;
`;
const ProductCard = ({ picture, title, price }) => (
  <Card>
    <Image src={picture} alt={title} />
    <Heading>{title}</Heading>
    <Price>
      <NumberFormat value={price} fixedDecimalScale decimalScale={2} displayType="text" thousandSeparator prefix="$" />
    </Price>
  </Card>
);

ProductCard.propTypes = {
  picture: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
