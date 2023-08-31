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
        case "GET_SORTED_PRODUCTS":
            const {sortingValue, filteredProducts} = state;
            let tempSortedProducts = [...filteredProducts];
            if(sortingValue === "lowest"){
                
            }
            if(sortingValue === "highest"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => b.price - a.price)
                
            }
            if(sortingValue === "ascending"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => a.name.localeCompare(b.name))
                
            }
            if(sortingValue === "descending"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => b.name.localeCompare(a.name))
                
            }
            if (sortingValue === "all"){
                tempSortedProducts = [...state.allProducts];
                
            }

        return {
            ...state,
            filteredProducts: [...tempSortedProducts],
        }
        case "UPDATE_FILTERS_VALUE":
            const {name, value} = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let {allProducts} = state;
            let tempFilteredProducts = [...allProducts];

            const {text, category, colors, brand} = state.filters;

            if (text) {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    console.log("TEXT",tempFilteredProducts)
                    return curEle.name.toLowerCase().includes(text.toLowerCase());
                });
            }
            if (category !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    console.log("CATEGORY",tempFilteredProducts)
                    return curEle.category.includes(category);
                });
            }
            if (colors !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    console.log("COLORS",tempFilteredProducts)
                    return curEle.colors.includes(colors);
                });
            }
            if (brand !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    console.log("BRAND",tempFilteredProducts)
                    return curEle.brand === brand;
                });
            }
            


            return {
                ...state,
                filteredProducts: tempFilteredProducts
            }
        default:
            return state;
    }
}
export default reducer;