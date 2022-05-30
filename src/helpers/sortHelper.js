/* const orderTypes = [
    1, // price increase
    2, // price decrease
    3, // name A-Я
    4  // name Я-А
] */
/**
 * 
 * @param {orderTypes используются для определения
 *  по какому параметру будет происходить сортировка.
 *  Указаны в массиве в начале файла и используются
 *  в файле Catalog} orderType 
 * @param { элементы для сортировки} items 
 * @returns 
 */
export function sortArr(orderType, items) {
    let sortedItemsList = items;
    switch (orderType) {
        case '1':
            return SortByPrice(sortedItemsList, true);
        case '2':
            return SortByPrice(sortedItemsList, false);
        case '3':
            return SortByName(sortedItemsList, true);
        case '4':
            return SortByName(sortedItemsList, false);
        default:
            return sortedItemsList;
    }
}


function SortByName(items, isAsc){
    let v = [...items];
    return v.sort(function(a, b){
        if(isAsc){
            return a.name.localeCompare(b.name, 'ru', {ignorePunctuation: true});
        } else {
            return b.name.localeCompare(a.name, 'ru', {ignorePunctuation: true});
        }
    })
}

function SortByPrice(items, isAsc){
    let v = [...items];
    return v.sort(function(a, b){
        if(isAsc){
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    })
}