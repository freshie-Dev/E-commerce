import { createContext, useEffect, useReducer, useContext, useState } from "react";
import ProductContextProvider from "./ProductContext";
const FilterContext = createContext();
import reducer from "../reducer/FilterReducer";



const initialState = {
    filteredProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "default",
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

    const sortProducts = () => {
        dispatch({ type: "GET_SORT_VALUE" });
    };
    useEffect(() => {
        dispatch({type: "GET-SORTED-PRODUCTS", payload: products});
    }, [state.sortingValue]);

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