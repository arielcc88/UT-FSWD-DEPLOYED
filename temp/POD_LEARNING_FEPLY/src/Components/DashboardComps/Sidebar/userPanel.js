import React from 'react';
import randUser8 from './randUser8.jpg'
import { Link } from 'react-router-dom';
import { Edit } from 'react-feather';

const UserPanel = () => {
    const url= '';

    return (
        <div>
            <div className="sidebar-user text-center">
                <div>
                    <img className="img-60 rounded-circle lazyloaded blur-up" src={url ? url : randUser8} alt="#" />
                    <div className="profile-edit">
                        <Link to="#">
                            <Edit />
                        </Link>
                    </div>
                </div>
                <h6 className="mt-3 f-14">Giselle K. Monroe</h6>
                <div>Instructor</div>
            </div>
        </div>
    );
};

export default UserPanel;