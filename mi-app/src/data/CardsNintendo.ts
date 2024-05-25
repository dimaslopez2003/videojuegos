// src/data/CardsNintendo.ts
export interface CardNintendo {
    avatarImage: string; // Nueva propiedad para la imagen del avatar
    title: string;
    subheader: string;
    image: string;
    description: string;
    method: string[];
  }
  
  export const cardsNintendo: CardNintendo[] = [
    {
      avatarImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/640px-Nintendo_switch_logo.png",
      title: "Nintendo",
      subheader: "Enero 18, 2024",
      image: "https://cdn1.epicgames.com/offer/22600f09e936468c8ecfc22b5eac7d7c/EGST_StoreLandscape_2560x1440_2560x1440-d49d4862a0e1a243638d5f95517ed205",
      description: "Una de las sagas más míticas de la historia de los videojuegos regresa con una nueva aventura en 2D con desafiantes combates con espada, plataformas con parkour, puzles, exploración y una estructura a lo metroidvania.",
      method: [""]
    },
  ];
  