import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import likedIcon from "../../assets/images/liked-icon.svg";
import unlikedIcon from "../../assets/images/unliked-icon.svg";
import {loadDataFromJson} from "../../utils/loadDataFromJson";
import axios from "axios";
import {useDarkTheme} from "../../context/DarkThemeContext";

const LikeButton = ({itemId}) => {
  const [liked, setLiked] = useState(Cookies.get(`liked_${itemId}`) === 'true');
  const [likeCount, setLikeCount] = useState(0);
  const {isDarkTheme} = useDarkTheme();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDataFromJson(`https://portfolio-c1bbd-default-rtdb.europe-west1.firebasedatabase.app/${itemId}.json`)
      .then(r => setLikeCount(r.likes));
  }, [itemId]);

  const handleLike = async () => {
    if (!liked) {
      setIsLoading(true);
      try {
        Cookies.set(`liked_${itemId}`, 'true', {expires: 365 * 10});
        await axios.patch(
          `https://portfolio-c1bbd-default-rtdb.europe-west1.firebasedatabase.app/${itemId}.json`,
          { likes: likeCount + 1 }
        );

        setLiked(true);
        setLikeCount((prevState) => prevState + 1)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
      try {
        Cookies.remove(`liked_${itemId}`);
        await axios.patch(
          `https://portfolio-c1bbd-default-rtdb.europe-west1.firebasedatabase.app/${itemId}.json`,
          { likes: likeCount - 1 }
        );

        setLiked(false);
        setLikeCount((prevState) => prevState - 1)
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={`project-like-button ${isDarkTheme && "dark-bg"}`}>
      <div className={`project-like-button-content ${isDarkTheme && "light-text"}`}>
        <span className="project-like-button-number">{likeCount}</span>
        <div className="project-like-button-text">
          <span>{likeCount === 1 ? 'person' : 'people'}</span>
          <span>{likeCount === 1 ? 'likes this' : 'like this'}</span>
        </div>
      </div>
      <button
        onClick={handleLike}
        disabled={isLoading}
      >
        <img
          src={liked ? likedIcon : unlikedIcon}
          width="30"
          alt="like-button"
        />
      </button>

    </div>
  );
};

export default LikeButton;
