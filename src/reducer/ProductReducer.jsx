const ProductReducer = (state , action) => {
   switch (action.type) {
    case "GET_LOADING":
        return { ...state, isLoading: true };
        break;

    case "GET_API_PRODUCTS_ERROR":
        return { ...state, isLoading: false, isError: true };
        break;

    case "SET_API_PRODUCTS":
        const featureProducts = action.payload.filter((product) => product.rating.rate > 4.5);
        return { ...state, isLoading: false, isError: false, products: action.payload, featuredProducts: featureProducts };
    default:
        break;
   }
};
export default ProductReducer;