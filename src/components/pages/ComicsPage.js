import {Outlet} from 'react-router-dom';

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <>
            <AppBanner />
            <Outlet/>
            <ComicsList />
        </>
    );
};

export default ComicsPage;