import { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './AdvertsItem.module.css';
import Modal from '../Modal';
import AdvertsModal from '../AdvertsModal';
import { parseAddress } from '../../utils/parseAdress'
import { findShortestItem } from '../../utils/shortestItem'
import { addToFavorites, removeFromFavorites } from '../../redux/adverts/advertsSlice'

export default function AdvertsItem({ item, isFavorite }) {

  const [openModal, setOpenModal] = useState(false);
  const close = () => setOpenModal(false);

  const {
    id, 
    year, 
    make, 
    model, 
    type, 
    img, 
    functionalities, 
    rentalPrice, 
    rentalCompany, 
    address, 
  } = item;

  const dispatch = useDispatch();
  const { city, country } = parseAddress(address);
  const shortestFunctionality = findShortestItem(functionalities);

  const handleFavoriteClick = (item) => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id: item.id }));
    } else {
      dispatch(addToFavorites(item));
    }
  };

  return (
    <>
        <li className={css.container}>
          <div className={css.wrapper}>
            <img
              className={css.img}
              src={img}
              alt={make}
              width="274"/>
              <div>
                <button
                  className={css.fav_btn}
                  type="button"
                  onClick={() => handleFavoriteClick(item)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  className={`${css.heart} ${isFavorite ? css.favoriteHeart : ''}`} >
                  <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" 
                 />
                  </svg>
                 </button> 
              </div> 
              </div>

          <div className={css.bottom_container}>
            <div className={css.mainInfo_container}>
              <ul className={css.model_list}>
                <li className={css.model_list_item}>{make},</li>
                <li className={css.accent}>{model.split('-').slice(0,1)},</li>
                <li className={css.model_list_item}>{year}</li>
              </ul>
              <p className={css.model_list_item}>{rentalPrice}</p>
            </div>
            <ul className={css.aditionalInfo_container}>
              <li className={css.aditionalInfo_item}>{city}</li>
              <li className={css.aditionalInfo_item}>{country}</li>
              <li className={css.aditionalInfo_item}>{rentalCompany}</li>
              <li className={css.aditionalInfo_item}>{type}</li>
              <li className={css.aditionalInfo_item}>{model}</li>
              <li className={css.aditionalInfo_item}>{id}</li>
              <li className={css.aditionalInfo_item}>{shortestFunctionality}</li>
            </ul>
            </div>
            {openModal && (
              <Modal isOpen={openModal} onClose={close}>
                <AdvertsModal
                  item={item}/>
              </Modal>
            )}
            <button
              className={css.learn_btn}
              type="button"
              onClick={() => setOpenModal(true)}>
              Learn More
            </button>
        </li>
    </>
  );
}
