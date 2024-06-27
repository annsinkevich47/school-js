import Loader from '../controller/loader';

class AppLoader extends Loader {
    constructor() {
        super((process.env.API_URL as string), {
            apiKey: '0a77ba09e97b49a187ae10d6d5f3d2b1',
        });
    }
}

export default AppLoader;
