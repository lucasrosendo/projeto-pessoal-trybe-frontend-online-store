export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
