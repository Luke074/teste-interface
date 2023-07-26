export interface Pokemons {
    name: string,
    link: string,
}

export interface Pokemon {
    name: string,
    sprint?: {
        front_default?: string,
        front_shiny?: string,
    },
    height?: number,
    weight?: number
}
