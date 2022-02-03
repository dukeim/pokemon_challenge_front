export interface Team {
    pokemons: Pokemon[];
}

export interface Pokemon {
    name:    string;
    stats:   StatElement[];
    types:   Type[];
    sprites: Sprites;
}

export interface Sprites {
    other: Other;
}

export interface Other {
    home: Home;
}

export interface Home {
    front_default: string;
}

export interface StatElement {
    base_stat: number;
    stat:      TypeClass;
}

export interface TypeClass {
    name: string;
}

export interface Type {
    type: TypeClass;
}
