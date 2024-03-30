const filterItems = (query, items) => {
    if (query === "") {
        return items;
    }
    return items.filter((item) => item.description.toLowerCase().indexOf(query.toLowerCase()) === 0);
}

export {filterItems}
