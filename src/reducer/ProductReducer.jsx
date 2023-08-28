const ProductReducer = (state, action) => {
    switch (action.type) {
      case "GET_LOADING":
        return { ...state, isLoading: true };
        break;
  
      case "GET_API_PRODUCTS_ERROR":
        return { ...state, isLoading: false, isError: true };
        break;
  
      case "SET_API_PRODUCTS":
        const featuredProducts = action.payload.filter(
          (product) => product.ratings.star > 4.5
        );
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
          featuredProducts: featuredProducts,
        };
        break;
  
      case "GET_SINGLE_LOADING":
        return { ...state, isSingleProductLoading: true };
        break;
  
      case "GET_API_SINGLE_PRODUCT_ERROR":
        return { ...state, isSingleProductLoading: false, isSingleProductError: true };
        break;
  
      case "SET_API_SINGLE_PRODUCT":
        return {
          ...state,
          isSingleProductLoading: false,
          isSingleProductError: false,
          singleProduct: action.payload,
        };
        break;
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;
  