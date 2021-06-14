/* eslint-disable no-underscore-dangle */
import './userPage.scss';
import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/actions/actionsCreators';

function schoolList() {
  const dispatch = useDispatch();
  const schools = useSelector((store) => store.schoolList);
  useEffect(() => {
    if (!schools.length) dispatch(getAll());
  }, []);
  return (
    <section className="user-page">
      <h1 className="user-page__title">SCHOOL LIST</h1>
      <ul className="user-page__school-list">
        {schools.map((school) => (
          <li key={`element:${school?._id}`} className="school-list__school-element">
            <h3>{school?.info?.name}</h3>
            <img className="school-element__image" src={school?.info?.imageUrl} alt={`${school?.info?.name}Skatepark`} />
            <Link className="school-list__nav" key={school?._id} to={`/school/${school?._id}`}>
              Details
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default schoolList;
