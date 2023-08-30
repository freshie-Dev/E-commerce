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
            console.log("tempSortedProducts 1", tempSortedProducts)
            if(sortingValue === "lowest"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => a.price - b.price)
                console.log("tempSortedProducts lowest", tempSortedProducts)
                
            }
            if(sortingValue === "highest"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => b.price - a.price)
                console.log("tempSortedProducts highest", tempSortedProducts)
                
            }
            if(sortingValue === "ascending"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => a.name.localeCompare(b.name))
                console.log("tempSortedProducts ascending", tempSortedProducts)
                
            }
            if(sortingValue === "descending"){
                tempSortedProducts = tempSortedProducts.sort((a,b) => b.name.localeCompare(a.name))
                console.log("tempSortedProducts descending", tempSortedProducts)
                
            }
            if (sortingValue === "all"){
                tempSortedProducts = [...state.allProducts];
                console.log("tempSortedProducts all", tempSortedProducts)
                
            }
            console.log("tempSortedProducts 2", tempSortedProducts)

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
                    return curEle.name.toLowerCase().includes(text.toLowerCase());
                });
            }
            if (category !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    // curEle.category is an array
                    return curEle.category.includes(category);
                });
            }
            if (colors !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    return curEle.colors === colors;
                });
            }
            if (brand !== "all") {
                tempFilteredProducts = tempFilteredProducts.filter((curEle) => {
                    // curEle.brand is not an array
                    return curEle.brand.includes(brand);
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