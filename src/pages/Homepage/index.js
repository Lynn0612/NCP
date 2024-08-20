import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Faq } from '@/components';
import { MiddleBanner } from './banners';
import Container from 'react-bootstrap/Container';
import { UserCard } from '@/components';
import { InsideBanner } from '@/components';

const HomePage = () => (
    <>

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