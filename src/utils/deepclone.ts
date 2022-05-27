export const deepclone = (nodesArray: any) =>{
    const clonedArray = JSON.parse(JSON.stringify(nodesArray))
    return nodesArray;
}