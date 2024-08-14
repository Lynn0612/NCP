export const getFaqs = () => {
    return getData(`v1/faqs`);
};

const getData = (uri, data) => {
    let url = `${process.env.REACT_APP_API_URL}${uri}`;
    if (data) {
        url = `${url}?` + new URLSearchParams(data).toString();
    }
    return fetch(url).then(res => res.json());
};