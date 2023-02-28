let favorites = [];

export function addFavorite(favorite) {
  favorites = [...favorites, favorite];
}

export function getFavorites() {
  return favorites;
}

export function removeFavorite(favorite) {
  favorites = favorites.filter((f) => f.id !== favorite.id);
}
