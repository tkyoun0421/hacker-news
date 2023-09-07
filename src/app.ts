import Router from './core/router';
import { Store } from './types';
import { NewsFeedView, NewsDetailView } from './page';

const store: Store = {
    currentPage: 1,
    feeds: [],
};

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();
