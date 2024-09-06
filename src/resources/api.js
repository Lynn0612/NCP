export const getFaqs = () => {
    return getData(`v1/faqs`);
};
export const getNews = () => {
    return getData(`v1/news`);
};
export const getNewslist = (page = 1, pageSize = 10, cateId = null) => {
    const params = {
        page,
        page_size: pageSize
    };
    if (cateId !== null) {
        params.category_id = cateId;
    }
    return getData('v1/news/list', params);
};
export const getNewsContent = (slug) => {
    return getData(`v1/news/content`, { slug: slug });
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