import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Faq } from '@/components';
import { MiddleBanner } from './banners';
import Container from 'react-bootstrap/Container';
import { UserCard } from '@/components';

const HomePage = () => (
<>
    
    <MiddleBanner />
    <Container>
        <UserCard />
        <Faq />
    </Container>
</>)
export default HomePage