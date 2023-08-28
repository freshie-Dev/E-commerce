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
                sortingValue: selectedSortValue,
            }
        case "GET-SORTED-PRODUCTS":
            let newSortedProducts;
            let tempSortedProducts = [...action.payload];
            if(state.sortingValue === "lowest"){
                newSortedProducts = tempSortedProducts.sort((a,b) => a.price - b.price)
            }
            if(state.sortingValue === "highest"){
                newSortedProducts = tempSortedProducts.sort((a,b) => b.price - a.price)
            }
            if(state.sortingValue === "ascending"){
                newSortedProducts = tempSortedProducts.sort((a,b) => a.name.localeCompare(b.name))
            }
            if(state.sortingValue === "descending"){
                newSortedProducts = tempSortedProducts.sort((a,b) => b.name.localeCompare(a.name))
            }


        return {
            ...state,
            filteredProducts: newSortedProducts,
        }
        default:
            return state;
    }
}
export default reducer;