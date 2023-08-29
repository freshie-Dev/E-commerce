import { createContext, useEffect, useReducer, useContext, useState } from "react";
import ProductContextProvider from "./ProductContext";
const FilterContext = createContext();
import reducer from "../reducer/FilterReducer";



const initialState = {
    filteredProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "default",
    filters: {
        text: "",
    }
};

const FilterProvider = ({ children }) => {
    const { products } = ProductContextProvider();

    const [state, dispatch] = useReducer(reducer, initialState);
    const [sortedProducts, setSortedProducts] = useState([...products]);

    const setGridView = () => {
        dispatch({ type: "SET_GRID_VIEW" });
    };
    const setListView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };

    const sortProducts = (sortValue) => {
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
    };

    const updateFilterValue = (event) => {
        let {name, value} = event.target;
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: {name, value} });
    };


    useEffect(() => {
        dispatch({ type: "GET_FILTERED_PRODUCTS" });
        dispatch({type: "GET-SORTED-PRODUCTS", payload: products});
    }, [products, state.sortingValue, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);
    

 

    return(
        <FilterContext.Provider value={
            {
                ...state,
                setGridView,
                setListView,
                sortProducts,
                updateFilterValue,
            }
            }>
            {children}
        </FilterContext.Provider>
    )
};
const FilterContextProvider = () => {
    return ( useContext(FilterContext) )
};

export { FilterProvider };
export default FilterContextProvider ;