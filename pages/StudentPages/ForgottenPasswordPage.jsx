import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import LandingNav from '../LandingPage/LandingNav';
import SendLink from './SendLink';
import SetNewPassword from './SetNewPassword';

const ForgottenPasswordPage = () => {
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');

    return (
        <div>
            <LandingNav />
            <div className="h-screen flex justify-center items-center border-2">
                {token == null || undefined ? <SendLink /> : <SetNewPassword token={token} />}
            </div>
        </div>
    );
}

export default ForgottenPasswordPage;
