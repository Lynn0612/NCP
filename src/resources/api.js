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

export const getBloglist = (page = 1, pageSize = 10, cateId = null) => {
    const params = {
        page,
        page_size: pageSize
    };
    if (cateId != null) {
        params.category_id = cateId;
    }
    return getData('v1/blog/list', params);
};
export const getBlogCategories = () => {
    return getData(`v1/blog/categories`);
};
export const getBlogContent = (slug) => {
    return getData(`v1/blog/content`, { slug: slug });
};

export const getCaptcha = () => {
    const url = `${process.env.REACT_APP_URL}captcha/api/math`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('not ok');
            }
            return res.json();
        });
};

export const postContact = (data) => {
    return postData('v1/contact', data);
};

const getData = (uri, data) => {
    let url = `${process.env.REACT_APP_API_URL}${uri}`;
    if (data) {
        url = `${url}?` + new URLSearchParams(data).toString();
    }
    return fetch(url).then(res => res.json());
};

const postData = (uri, data) => {
    const url = `${process.env.REACT_APP_API_URL}${uri}`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    });
};