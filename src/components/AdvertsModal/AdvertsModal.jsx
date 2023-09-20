import { Link } from "react-router-dom";
import { parseAddress } from '../../utils/parseAdress'
import css from "./AdvertsModal.module.css";

export default function AdvertsModal({ item }) {

  if (!item) {
    return;
  };

  const {
    id, 
    year, 
    make, 
    model, 
    type, 
    img, 
    description, 
    fuelConsumption, 
    engineSize, 
    accessories, 
    functionalities, 
    rentalPrice,  
    address, 
    rentalConditions, 
    mileage
  } = item;

  const { city, country } = parseAddress(address);
  const accessAndFuncArr = [...accessories, ...functionalities];
  const conditionsArray = rentalConditions.split('\n');

  const conditionsList = conditionsArray.map((condition, index) => {
    if (condition.includes('Minimum age:')) {
      const [label, value] = condition.split(': ');
      return (
        <li key={index} className={css.condition_item}>
          {label}: <p className={css.value}>{value}</p>
        </li>
        );
    } else {
      return (
        <li key={index} className={css.condition_item}>{condition}</li>
        );
    }
  });

  const additionalInfoArray = [mileage, rentalPrice];

  const additionalInfoList = additionalInfoArray.map((info, index) => (
    <li key={index} className={css.condition_item}>
    {index === 0 ? 'Mileage: ' : 'Price: '}
    {typeof info === 'number'
      ? <p className={css.value}>{info.toLocaleString('en-US')}</p> 
      : <p className={css.value}>{parseFloat(info.substring(1))}$</p>}
  </li>
  ));

  const phoneNumber = "tel:+380730000000";

  return (
    <>
      <div className={css.container}>
        <img alt={model} className={css.photo} src={img} />
        <ul className={css.model_list}>
          <li className={css.model_list_item}>{make},</li>
          <li className={css.accent}>{model},</li>
          <li className={css.model_list_item}>{year}</li>
        </ul>
        <ul className={css.aditionalInfo_container}>
          <li className={css.list_item}>{city}</li>
          <li className={css.list_item}>{country}</li>
          <li className={css.list_item}>id: {id}</li>
          <li className={css.list_item}>year: {year}</li>
          <li className={css.list_item}>type: {type}</li>
          <li className={css.list_item}>fuelConsumption: {fuelConsumption}</li>
          <li className={css.list_item}>engineSize: {engineSize}</li>
        </ul>
        <p className={css.description}>{description}</p>
        <h2 className={css.title}>Accessories and functionalities:</h2>
        <ul className={css.accessAndFuncArr_container}>
          {accessAndFuncArr.length > 0 && accessAndFuncArr.map((item, index) => (
          <li key={index} className={css.list_item}>
            {item}
            </li>))}
        </ul>
        <h2 className={css.title}>Rental Conditions:</h2>
          <ul className={css.condition_list}>
            {conditionsList}
            {additionalInfoList}
          </ul>
        <Link
          className={css.call_btn}
          to={phoneNumber}>
          Rental Car
        </Link>
      </div>
    </>
  );
};
