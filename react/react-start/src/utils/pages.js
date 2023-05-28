export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getArrayPages = (amountPages) => {
    let result = [];
    for(let i = 0; i < amountPages; i++) {
        result.push(i + 1);
    }

    return result;
}