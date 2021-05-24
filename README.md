# PokeAPI App

# Información

## API

La api usada es [PokeApi](https://pokeapi.co/)

## Tecnologias

+ Axios: Para el consumo de los endpoints.
+ Context API: Para la administración de los estados globales.

## Patrones de diseño

+ Render Props: Se usó para la comunicación entre componentes.
+ HOC: Se usó para reutilizar el componente Layout.

  Ejemplo de uso de ambas tecnologias :

  ```javascript
  <Layout>
    <Buscar />
    <ListadoPokemon page={actualPage} />
    <Pagination
      count={70}
      color="primary"
      size="large"
      className={classes.navCenter}
      onChange={handleChange}
    />
  </Layout>
  ```

+ Provider: Se usó para proveer estados y funcionalidades al Contexto.

  Ejemplo de uso:

  ```javascript
  <PokemonContext.Provider
    value={{
      pokemonList: state.pokemonList,
      pokemon: state.pokemon,
      favoriteList: state.favoriteList,
      updateFavorites,
      getFavorites,
      getPokemons,
      getPokemon,
      searchPokemon,
      clearPokemon,
      notFound: state.notFound,
      search: state.search,
      clearPokemons,
    }}
  >
    {props.children}
  </PokemonContext.Provider>
  ```
