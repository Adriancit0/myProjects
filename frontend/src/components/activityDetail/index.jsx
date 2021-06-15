/* eslint-disable no-underscore-dangle */
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateById } from '../../redux/actions/actionsCreators';

function activityDetail({ activity, index }) {
  const [imInterested, setImInterested] = useState(false);
  const [currentLike, setCurrentlike] = useState(activity.likes);
  const [currentPriceBook, setCurrentPriceBook] = useState(0);
  const [currentPlaces, setCurrentPLaces] = useState(activity.places);
  const dispatch = useDispatch();
  const school = useSelector((store) => store.itemSelected);
  const schoolId = school._id;
  const unityPrice = activity.price.quantity;

  function handleImInterested() {
    setImInterested(!imInterested);
    const activities = [...school.activities];
    if (!imInterested) {
      const newCurrentLike = currentLike + 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    } else {
      const newCurrentLike = currentLike - 1;
      setCurrentlike(newCurrentLike);
      activities[index].likes = newCurrentLike;
    }
    dispatch(updateById(schoolId, { activities }));
  }

  function sumPrice() {
    if (currentPlaces > 0) {
      setCurrentPriceBook(currentPriceBook + unityPrice);
      setCurrentPLaces(currentPlaces - 1);
    }
  }

  function substracPrice() {
    if (currentPriceBook > 0) {
      setCurrentPriceBook(currentPriceBook - unityPrice);
      setCurrentPLaces(currentPlaces + 1);
    }
  }

  return (
    <li key={activity?._id} className="activities-list__activitie-item">
      <ul>
        <h4>
          {activity?.description}
        </h4>
        <li>
          Level:
          {' '}
          {activity?.level}
        </li>
        <li>
          Schedule:
          {' '}
          {activity?.schedule}
        </li>
        <li>
          Price:
          {' '}
          {activity?.price?.quantity}
          /
          {activity?.price?.unity}
        </li>
        <li>
          Places:
          {' '}
          {currentPlaces}
        </li>
        <footer className="activities-item-footer">
          <button type="button" onClick={sumPrice}>+</button>
          <button type="button" onClick={substracPrice}>-</button>
          <p>
            Price:
            {' '}
            {currentPriceBook}
            /
            {activity.price.unity}
          </p>
          <button type="button">Book</button>
          <button type="button" onClick={handleImInterested}>
            {imInterested ? 'Im not interested' : 'Im interested'}
          </button>
          <p>
            {activity?.likes}
            {' '}
            has interested in this ofert
          </p>
        </footer>
      </ul>
    </li>
  );
}

export default activityDetail;
