
export const getCakeByName = (name = '', cakes) => {

    name = name.toLocaleLowerCase().trim();

    if (name.length === 0) return [];

    return cakes.filter(
        cake => cake.name.toLocaleLowerCase().includes(name)
    );
}