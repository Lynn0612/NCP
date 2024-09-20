import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Faq } from '@/components';
import { MiddleBanner } from './banners';
import { TopBanner } from './banners';
import Container from 'react-bootstrap/Container';
import { UserCard } from '@/components';
import { InsideBanner } from '@/components';
import { Partners } from '@/components';

const HomePage = () => (
    <>
        <TopBanner />
        <Partners />
        <MiddleBanner />
        <Container>
            <UserCard />
        </Container>
        <InsideBanner />
        <Container>
            <Faq />
        </Container>
    </>)
export default HomePage