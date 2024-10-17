import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { NavLink } from 'react-router-dom';
import styles from './CardModel.module.scss';

const CardModel = ({ faculty }) => {
  const { photo, name, professorType, researchInterest, email, phone, collegeJoinYear, id } = faculty;

  return (
    <>
      <div className={styles.facultyCard}>
        <div className="flex flex-col items-center">
          <div className="relative w-full h-full flex justify-center items-center pt-3 pb-3 bg-gradient-to-r from-blue-200 via-purple-100 to-orange-100">
            <div className="w-29 h-29 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mt-1 mb-1">
              <div className="w-full h-full rounded-full bg-white p-1 flex justify-center items-center">
                <img
                  className="w-28 h-28 rounded-full object-cover"
                  src={photo}
                  alt={`Profile of ${name}`}
                />
              </div>
            </div>
          </div>
          {name.length>0 && <h3 className={styles.facultyName}>{name}</h3>}
          {professorType.length>0 &&<p className={styles.facultyPosition}>{professorType}</p>}
        </div>
        <div className="text-center flex-grow">
          {researchInterest.length>0 && <p className={`${styles.facultyResearch} ${styles.lineClamp}`}>
            <strong>Research Interest:</strong> {researchInterest}
          </p>}
          {email.length>0 && <p className={styles.facultyEmail}>
            <EmailIcon />: <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a>
          </p>}
          {(phone.length>0 || phone) && <p className={styles.facultyPhone}>
            <PhoneIcon />: <a href={`tel:${phone}`} className="text-blue-500 underline">{phone}</a>
          </p>}
          {(collegeJoinYear.length>0 || collegeJoinYear)&& <p className={styles.facultyJoined}>Joined: {collegeJoinYear}</p>}
        </div>
        {id.length>0 && <NavLink to={`/professor/${id}`} className={styles.detailsButton}>
          View Details
        </NavLink>}
      </div>
    </>
  );
};

export default CardModel;
