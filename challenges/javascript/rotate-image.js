/**
 * You are given an n x n 2D matrix that represents an image. 
 * Rotate the image by 90 degrees (clockwise).
 * 
 *  a = [[1, 2, 3],
 *       [4, 5, 6],
 *       [7, 8, 9]]
 * 
 * Rotates the matrix-image by 90 degrees
 * @param {array} a matrix
 * @return {array} new matrix
 */
function rotateImage(a) {
    const result = [];
    
    a.forEach((b, indexX) => {
        const newArr = [];
        b.forEach((n, indexY) => {
            newArr.unshift(a[indexY][indexX]);
        })   
        result.push(newArr);
    })
    
    return result;
}
