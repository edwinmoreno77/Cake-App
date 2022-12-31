

export const getCakeByCategory = (category, cakes) => {

    const validCategory = ['CHOCOLATE', 'BUTTERCREAM'];
    if (!validCategory.includes(category)) {
        throw new Error(`${category} is not a valid publisher`);
    }

    return cakes.filter(cake => cake.category.name === category);
}
