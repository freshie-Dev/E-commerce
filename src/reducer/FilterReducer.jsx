const reducer = (state, action) => {
    switch(action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filteredProducts: [...action.payload],
                allProducts: [...action.payload],
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView:  true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false,
            }
        case "GET_SORT_VALUE":
            const selectField = document.getElementById("sort");
            const selectedSortValue = selectField.options[selectField.selectedIndex].value;
            return {
                ...state,
                sortingValue: action.payload,
            }
        case "GET-SORTED-PRODUCTS":
            let newSortedProducts;
            const {sortingValue, filteredProducts} = state;
            let tempSortedProducts = [...filteredProducts];
            if(sortingValue === "lowest"){
                newSortedProducts = tempSortedProducts.sort((a,b) => a.price - b.price)
            }
            if(sortingValue === "highest"){
                newSortedProducts = tempSortedProducts.sort((a,b) => b.price - a.price)
            }
            if(sortingValue === "ascending"){
                newSortedProducts = tempSortedProducts.sort((a,b) => a.name.localeCompare(b.name))
            }
            if(sortingValue === "descending"){
                newSortedProducts = tempSortedProducts.sort((a,b) => b.name.localeCompare(a.name))
            }
        return {
            ...state,
            filteredProducts: newSortedProducts,
        }
        case "UPDATE_FILTER_VALUE":
            const {name, value} = action.payload;
            
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "GET_FILTERED_PRODUCTS":
            let {allProducts, filters} = state;
            const {text} = filters;
            let tempProducts = [...allProducts];
            if(text){
                tempProducts = tempProducts.filter((product) => {
                    return product.name.toLowerCase().includes(text.toLowerCase())
                })
            } 
            console.log("temp products",tempProducts)
            return {
                ...state,
                filteredProducts: tempProducts
            }
        default:
            return state;
    }
}
export default reducer;