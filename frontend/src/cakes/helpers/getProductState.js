


export const getProductByState = (available, cakes) => {

    return cakes.filter(cake => cake.available === true);
}