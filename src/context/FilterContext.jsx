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
        category: "all",
        colors: "all",
        brand: "all",
        price: 0,
        maxPrice: 0,
        minPrice: 0,
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

    const sortProducts = (event) => {
        let {value: sortValue} = event.target;
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue });
    };

    //! clear all filters
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"});
    }

    //! update the filter values
    const updateFilterValue = (event)=> {
        let {name, value} = event.target;
        // console.log ("state", state.filters)

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
    }

    //! load filtered products when the filters change or sorted products when the sorting value changes
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type: "GET_SORTED_PRODUCTS"});
    }, [products, state.filters, state.sortingValue]);

    // useEffect(() => {
    //     dispatch({type: "GET_SORTED_PRODUCTS"});
    // }, [ state.sortingValue])
    

    //! load all products for the gird and list view for the first time
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
                clearFilters
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