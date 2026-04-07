import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from "./Profile";

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 :</h3>
            <ul>
                <li>
                    <Link to="velopert">velopert</Link>
                </li>
                <li>
                    <Link to="gildong">gildong</Link>
                </li>
            </ul>

            <Routes>
                <Route index element={<div>사용자를 선택해 주세요.</div>} />
                <Route path=":username" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Profiles;