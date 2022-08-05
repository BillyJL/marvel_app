import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

const ComicsPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of out ccomics"
                />
                <title>Comics Page</title>
            </Helmet>
            <AppBanner />
            <Outlet />
            <ComicsList />
        </>
    );
};

export default ComicsPage;