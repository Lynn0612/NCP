import "./style.scss";
import React from 'react';
import { Image } from 'react-bootstrap';
import data1 from './data1.png';
import data2 from './data2.png';
import data3 from './data3.png';

const articleData = {
    'Summary of Current Projects': {
        title: 'Summary of Current Projects',
        image: data1,
        title1: 'Species Richness',
        content: 'This is the total count of OTUs detected in each sample. The blue portion of each bar indicates the<br />number of OTUs identified to a species.',
        image2: data2,
        title2: 'Evolutionary Diversity',
        content2: 'Evolutionary Diversity calculated for each sample. This is a measure of the variety of species types that<br />occurred in your samples.',
        image3: data3,
        content3: 'Evolutionary Diversity is a strong complementary indicator of biodiversity progress alongside Species<br />Richness. Increasing Evolutionary Diversity can indicate an increasing resilience of the community.'
    },
    'Fair Carbon Project': {
        title: 'Fair Carbon Project',
        image: data1,
        title1: 'Species Richness',
        content: 'This is the total count of OTUs detected in each sample. The blue portion of each bar indicates the<br />number of OTUs identified to a species.',
        image2: data2,
        title2: 'Evolutionary Diversity',
        content2: 'Evolutionary Diversity calculated for each sample. This is a measure of the variety of species types that<br />occurred in your samples.',
        image3: data3,
        content3: 'Evolutionary Diversity is a strong complementary indicator of biodiversity progress alongside Species<br />Richness. Increasing Evolutionary Diversity can indicate an increasing resilience of the community.'
    },
    'Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries': {
        title: 'Untangling the Net of ‘Bycatch’ in Commercial Shark Fisheries',
        image: data1,
        title1: 'Species Richness',
        content: 'This is the total count of OTUs detected in each sample. The blue portion of each bar indicates the<br />number of OTUs identified to a species.',
        image2: data2,
        title2: 'Evolutionary Diversity',
        content2: 'Evolutionary Diversity calculated for each sample. This is a measure of the variety of species types that<br />occurred in your samples.',
        image3: data3,
        content3: 'Evolutionary Diversity is a strong complementary indicator of biodiversity progress alongside Species<br />Richness. Increasing Evolutionary Diversity can indicate an increasing resilience of the community.'
    },
    'Plastic Free Campus and Carbon-Free Campus': {
        title: 'Plastic Free Campus and Carbon-Free Campus',
        image: data1,
        title1: 'Species Richness',
        content: 'This is the total count of OTUs detected in each sample. The blue portion of each bar indicates the<br />number of OTUs identified to a species.',
        image2: data2,
        title2: 'Evolutionary Diversity',
        content2: 'Evolutionary Diversity calculated for each sample. This is a measure of the variety of species types that<br />occurred in your samples.',
        image3: data3,
        content3: 'Evolutionary Diversity is a strong complementary indicator of biodiversity progress alongside Species<br />Richness. Increasing Evolutionary Diversity can indicate an increasing resilience of the community.'
    },
    'Partners': {
        title: 'Partners',
        image: data1,
        title1: 'Species Richness',
        content: 'This is the total count of OTUs detected in each sample. The blue portion of each bar indicates the<br />number of OTUs identified to a species.',
        image2: data2,
        title2: 'Evolutionary Diversity',
        content2: 'Evolutionary Diversity calculated for each sample. This is a measure of the variety of species types that<br />occurred in your samples.',
        image3: data3,
        content3: 'Evolutionary Diversity is a strong complementary indicator of biodiversity progress alongside Species<br />Richness. Increasing Evolutionary Diversity can indicate an increasing resilience of the community.'
    },
};

export const DataArticle = ({ currentArticle }) => {
    const article = articleData[currentArticle] ;

    return (
        <div id="DataArticle">
            <div>
                <h2>{article.title}</h2>
            </div>
            <hr />
            <div>
                <Image src={article.image} className="w-100" />
            </div>
            <div className="content">
                <div>
                    <h4>{article.title1}</h4>
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
                <div>
                    <Image src={article.image2} className="w-100" />
                </div>
                <div>
                    <h4>{article.title2}</h4>
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: article.content2 }} />
                </div>
                <div>
                    <Image src={article.image3} className="w-100" />
                </div>
                <p className="content-p" dangerouslySetInnerHTML={{ __html: article.content3 }} />
            </div>
        </div>
    );
};
