

export function filterArr(lifeTime, filterItemsList) {
    console.log(filterItemsList);
    let newFilterArr = filterItemsList.filter((item) => item.lifeTime == lifeTime);
    if(lifeTime == 0){
        newFilterArr = filterItemsList;
    }
    if(newFilterArr.length === 0){
        console.log("error");
    }
    console.log(newFilterArr);
    return newFilterArr;
}