import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import styles from './TecherProfile.module.scss';
import { IoMdMail } from "react-icons/io";
import { FaInternetExplorer, FaFacebook, FaResearchgate, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { IoMenu } from "react-icons/io5";
import SummaryApi from '../../common/index';

const TeacherProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const [professor, setProfessor] = useState(null);
  const [check, setCheck] = useState(true);
  const [sponsoredProjects, setSponsoredProjects] = useState([]);
  const [consultancyProjects, setConsultancyProjects] = useState([]);




  const fetchProfessor = async () => {
    console.log(id);
    try {
      const response = await fetch(SummaryApi.GetCseProfProfile.url, {
        method: SummaryApi.GetCseProfProfile.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch professor data');
      }
      const foundProfessor = await response.json();
      setProfessor(foundProfessor);
    } catch (error) {
      console.error("Error fetching professor:", error);
      alert("There was a problem fetching the professor's data. Please try again later.");
    }
  };


  const fetchProjects = async () => {
    try {
      const response = await fetch(SummaryApi.GetCseProjectDetails.url, {
        method: SummaryApi.GetCseProjectDetails.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
      });

      const projectData = await response.json();
      setSponsoredProjects(projectData.sponsered || []);
      setConsultancyProjects(projectData.consultancy || []);

      console.log('Fetched Projects:', projectData);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };


  useEffect(() => {
    fetchProfessor();
    fetchProjects();
  }, [id]);

  useEffect(() => {
    const setOption = () => {
      if (window.innerWidth >= 768) {
        setCheck(true);
      }
    };

    setOption();
    window.addEventListener('resize', setOption);

    return () => {
      window.removeEventListener('resize', setOption);
    };
  }, []);

  const handleCheck = () => {
    setCheck(!check);
  };

  if (!professor) {
    return <div>Loading...</div>;
  }

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <img src={`${professor.photo}`} alt={`${professor.name}`} />
        <p className='font-bold'>{professor.name}</p>
        <p className='text-xs'>{professor.professorType}</p>
        <p className='text-xs'>Joined the college on <p className='font-bold'>{professor.collegeJoinYear}</p></p>
        <p className='flex flex-col items-center justify-center'>
          <IoMdMail className='mb-2' />
          <a href={`mailto:${professor.contact.email}`} className="text-white hover:text-yellow-500">
            {professor.contact.email}
          </a>
        </p>

        <div className={styles.socialMedia}>
          <p><a href={professor.socialMedia.website}><FaInternetExplorer /></a></p>
          <p><a href={professor.socialMedia.linkedin}><FaLinkedin /></a></p>
          <p><a href={professor.socialMedia.twitter}><FaTwitter /></a></p>
          <p><a href={professor.socialMedia.facebook}><FaFacebook /></a></p>
          <p><a href={professor.socialMedia.googleScholar}><SiGooglescholar /></a></p>
          <p><a href={professor.socialMedia.researchGate}><FaResearchgate /></a></p>
        </div>
      </div>

      <div className={styles.middleBar}>
        <div className={styles.pubEdu}>
          <div className={styles.pub}>
            <p>Publication</p>
            <div className={styles.pubChat}>
              <Link to={`/professor/${id}/publications/${id}`}>
                <div className={styles.box}>
                  <p>Publications</p>
                  <p>{professor.publications.length}</p>
                </div>
              </Link>
              <Link to={`/professor/${id}/projects/${id}`}>
                <div className={styles.box}>
                  <p>Sponsored Projects</p>
                  <p>{sponsoredProjects.length}</p>
                </div>
              </Link>
              <Link to={`/professor/${id}/projects/${id}`}
              >
                <div className={styles.box}>
                  <p>Consultancy Projects</p>
                  <p>{consultancyProjects.length}</p>
                </div>
              </Link>

            </div>
          </div>
          <div className={styles.edu}>
            <p>Education</p>
            <div className={styles.eduChat}>
              <Link to={`/professor/${id}/ugpgstudents/${id}`}>
                <div className={styles.box}>
                  <p>Undergraduate</p>
                  <p>{professor.ugStudents.length}</p>
                </div>
              </Link>
              <Link to={`/professor/${id}/ugpgstudents/${id}`}>
                <div className={styles.box}>
                  <p>Postgraduate</p>
                  <p>{professor.pgStudents.length}</p>
                </div>
              </Link>
              <Link to={`/professor/${id}/doctoralstudents/${id}`}>
                <div className={styles.box}>
                  <p>Doctoral</p>
                  <p>{professor.doctoralStudents.length}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
        <div className={styles.academicIde}></div>
      </div>

      <div className={styles.rightBar}>
        <p className={styles.menu} onClick={handleCheck}>
          <IoMenu />
        </p>

        {check && (
          <ul className={styles.rightBarList}>
            <li className={isActive('education') ? styles.active : ''}>
              <Link to={`/professor/${id}/education/${id}`}>Education</Link>
            </li>
            <li className={isActive('experience') ? styles.active : ''}>
              <Link to={`/professor/${id}/experience/${id}`}>Work Experience</Link>
            </li>
            <li className={isActive('research-interest') ? styles.active : ''}>
              <Link to={`/professor/${id}/research-interest/${id}`}>Research Interest</Link>
            </li>
            <li className={isActive('projects') ? styles.active : ''}>
              <Link to={`/professor/${id}/projects/${id}`}>Projects</Link>
            </li>
            <li className={isActive('publications') ? styles.active : ''}>
              <Link to={`/professor/${id}/publications/${id}`}>Publications</Link>
            </li>
            <li className={isActive('teaching') ? styles.active : ''}>
              <Link to={`/professor/${id}/teaching-topics/${id}`}>Teaching</Link>
            </li>
            <li className={isActive('doctoralstudent') ? styles.active : ''}>
              <Link to={`/professor/${id}/doctoralstudents/${id}`}>Doctoral Students</Link>
            </li>
            <li className={isActive('ugpgstudent') ? styles.active : ''}>
              <Link to={`/professor/${id}/ugpgstudents/${id}`}>UG / PG Students</Link>
            </li>
            <li className={isActive('awards') ? styles.active : ''}>
              <Link to={`/professor/${id}/awards/${id}`}>Awards and Honours</Link>
            </li>
            <li className={isActive('administation') ? styles.active : ''}>
              <Link to={`/professor/${id}/administation/${id}`}>Administrative Responsibilities</Link>
            </li>
            <li className={isActive('contact') ? styles.active : ''}>
              <Link to={`/professor/${id}/contact/${id}`}>Contact</Link>
            </li>
            <li className={isActive('miscellaneous') ? styles.active : ''}>
              <Link to={`/professor/${id}/miscellaneous/${id}`}>Miscellaneous</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeacherProfile;