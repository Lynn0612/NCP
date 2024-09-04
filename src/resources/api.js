export const getFaqs = () => {
    return getData(`v1/faqs`);
};
export const getNews = () => {
    return getData(`v1/news`);
};
export const getNewslist = () => {
    return getData(`v1/news/list`);
};
export const getNewsContent = (slug) => {
    return getData(`v1/news/content`, {slug: slug});
};
export const getCategories = () => {
    return getData(`v1/categories`);
};
export const getBasicConfigs = () => {
    return getData(`v1/config/basic`);
};

const getData = (uri, data) => {
    let url = `${process.env.REACT_APP_API_URL}${uri}`;
    if (data) {
        url = `${url}?` + new URLSearchParams(data).toString();
    }
    return fetch(url).then(res => res.json());
};