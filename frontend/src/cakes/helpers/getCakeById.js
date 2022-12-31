

export const getCakeById = (uid, cakes) => {

    return cakes.find(cake => cake.uid === uid);
}