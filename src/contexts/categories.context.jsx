import {createContext, useState, useEffect} from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // })

    // Used to create a shop products categories in the database, only needed to be called once reason why it's been comment out after the first initialization.

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();

            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = {categoriesMap, setCategoriesMap};

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}