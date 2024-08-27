import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    listFavouritePosts: [],
    addFavouritePost: (id) => {},
    removeFavouritePost: (id) => {},
});


function FavouriteContextProvider({children}) {

    const [listFavouritePostsIds, setListFavouritePostsIds] = useState([]);

    function addFavouritePost(id) {
        setListFavouritePostsIds((currentFavouriteId) => [...currentFavouriteId, id])
    }

    function removeFavouritePost(id) {
        setListFavouritePostsIds((currentFavouriteId) => currentFavouriteId.filter((postId) => postId !== id))
    }

    const values = {
        listFavouritePosts: listFavouritePostsIds,
        addFavouritePost: addFavouritePost,
        removeFavouritePost: removeFavouritePost

    }


    return <FavouriteContext.Provider value={values}>
        {children}
    </FavouriteContext.Provider>
}

export default FavouriteContextProvider;