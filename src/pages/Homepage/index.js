import React, { useEffect, useState } from 'react';
import "./style.scss"
import { Faq } from '@/components';
import { Navbar} from '@/components';
import { MiddleBanner } from './banners';
import Container from 'react-bootstrap/Container';

const HomePage = () => (
<>
    <Navbar />
    <MiddleBanner />
    <Container>
        <Faq />
    </Container>
</>)
export default HomePage