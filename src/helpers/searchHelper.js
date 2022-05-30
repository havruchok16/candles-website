

export function searchArr(searchValue, searchItemsList) {
    console.log(searchItemsList);
    let newSearchArr = searchItemsList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    document.getElementById("error_result").innerHTML = "";

    if(searchValue == ''){
        newSearchArr = searchItemsList;
    }

    if(newSearchArr.length === 0){
        console.log('error');
        document.getElementById("error_result").innerHTML = "По вашему запросу ничего не найдено";
    }

    console.log(newSearchArr);
    return newSearchArr;
}