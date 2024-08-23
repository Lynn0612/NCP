import React, { useEffect, useState } from 'react';
import { getBasicConfigs } from '@rsrc/api';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOHandler = () => {
    const [configs, setConfigs] = useState({});

    useEffect(() => {
        getBasicConfigs().then(json => {
            setConfigs(json.data);
        })
    }, []);

    const meta = [];
    const title = configs['SITE_TITLE'];
    const description = configs['SITE_DESCRIPTION'];
    const metaAdd = (name, content) => {
        meta.push({ name: name, content: content });
    };
    
    if (title) {
        metaAdd('og:title', title);
    }

    if (description) {
        metaAdd('description', description);
        metaAdd('og:description', description);
    }
    return (
    <HelmetProvider>
        <Helmet>
            {title?<title>{title}</title>:''}
            {meta.map((x,i) => {
                return <meta name={x.name} content={x.content} key={i}/>
            })}
        </Helmet>
    </HelmetProvider>)
}
export default SEOHandler
