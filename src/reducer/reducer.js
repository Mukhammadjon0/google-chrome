export const initialState = [
  { id: 2, title: "Facebook", link: "https://www.facebook.com" },
  { id: 3, title: "Gmail", link: "https://mail.google.com/" },
  { id: 4, title: "Instagram", link: "https://www.instagram.com/" },
  { id: 5, title: "YouTobe", link: "https://www.youtube.com/" },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), ...action.payload }];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    case "EDIT":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updatedItem }
          : item
      );
    default:
      return state;
  }
};
