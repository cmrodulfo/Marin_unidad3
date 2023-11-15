import React from 'react';
import { Box, Image, Text, Heading, Flex, Badge, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button } from '@chakra-ui/react';


const ProductDetail = ({ product }) => {
 
  const { image, name, description, code, stock, price } = product;

  
  const [quantity, setQuantity] = React.useState(1);

  
  const handleChange = (value) => {
    
    if (value > 0 && value <= stock) {
    
      setQuantity(value);
    }
  };

  
  return (
   
    <Box maxW="800px" mx="auto" p="4">
     
      <Flex direction={{ base: 'column', md: 'row' }} align="center">
      
        <Image src={image} alt={name} w='250px' margin='10px' />
        
        <Box ml={{ base: 0, md: '4' }} mt={{ base: '4', md: 0 }}>
        
          <Heading as="h1" size="lg" color="teal.500">
            {name}
          </Heading>
          
          <Text fontSize="lg" mt="2">
            {description}
          </Text>
          
          <Text fontSize="lg" mt="2" fontWeight="bold">
            Código: {code}
          </Text>
         
          <Badge colorScheme={stock > 0 ? 'green' : 'red'} mt="2">
            Stock: {stock}
          </Badge>
          
          <Text fontSize="lg" mt="2" color="gray.600">
            Precio: ${price}
          </Text>
          
          <NumberInput
            value={quantity}
            onChange={handleChange}
            min={1}
            max={stock}
            mt="4"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
         
          <Button
            colorScheme="teal"
            size="lg"
            mt="4"
            disabled={stock === 0}
          >
            Comprar
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetail;
