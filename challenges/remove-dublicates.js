function removeDublicates(array) {
    const result = array.filter((item, index) => {
        return array.indexOf(item) == index;
    })

    return result;
}
  
  removeDublicates([1,3,2,4]);
  removeDublicates([1,3,3]);
  removeDublicates([1,4,1,4]);
  removeDublicates([1,1,1,1,1,1]);