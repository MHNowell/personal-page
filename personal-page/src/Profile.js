import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div class="profile">
            <div class="exeter">
                <img class="exe_banner" src="uni_exeter.jpg" alt="Code"/>
                <div class="exeter_logo_container"></div>
                <img class="exe_logo" src="exeter_uni.png" alt="Code"/>
                <div class="exeter_text">
                    <h2> BSc Computer Science </h2>
                </div>
            </div>
            <div class="qmul">
                <img class="qmul_banner" src="uni_qmul.jpg" alt="Code"/>
                <div class="qmul_logo_container"></div>
                <img class="qmul_logo" src="qmul_logo.png" alt="Code"/>
                <div class="qmul_text">
                    <h2> MSc Advanced Robotics </h2>
                </div>
            </div>
            <div class="other">
                <p>Other Experiences</p>
            </div>
        </div>
    );
}

export default Profile;