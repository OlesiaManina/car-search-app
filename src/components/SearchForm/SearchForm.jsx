import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFilterCriteria } from '../../redux/adverts/advertsSlice';
import css from './SearchForm.module.css'

export default function SearchForm() {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const dispatch = useDispatch();

  const handleFilter = () => {

    const filterCriteria = {
      brand,
      price,
      minMileage,
      maxMileage,
    };
    dispatch(updateFilterCriteria(filterCriteria));
  };

  return (
<form className={css.form}>
      <div className={css.section}>
        <label className={css.label}>Car Brand:</label>
        <select onChange={(e) => setBrand(e.target.value)} className={css.brandSelect}>
          <option value="">Enter the text</option>
          <option value="Buick" className={css.option}>Buick</option>
          <option value="Volvo" className={css.option}>Volvo</option>
          <option value="Hummer" className={css.option}>Hummer</option>
          <option value="Subaru" className={css.option}>Subaru</option>
          <option value="Mitsubishi" className={css.option}>Mitsubishi</option>
          <option value="Nissan" className={css.option}>Nissan</option>
          <option value="Lincoln" className={css.option}>Lincoln</option>
          <option value="GMC" className={css.option}>GMC</option>
          <option value="Hyundai" className={css.option}>Hyundai</option>
          <option value="MINI" className={css.option}>MINI</option>
          <option value="Bentley" className={css.option}>Bentley</option>
          <option value="Mercedes-Benz" className={css.option}>Mercedes-Benz</option>
          <option value="Aston Martin" className={css.option}>Aston Martin</option>
          <option value="Lamborghini" className={css.option}>Lamborghini</option>
          <option value="Audi" className={css.option}>Audi</option>
          <option value="BMW" className={css.option}>BMW</option>
          <option value="Chevrolet" className={css.option}>Chevrolet</option>
          <option value="Mercedes-Benz" className={css.option}>Mercedes-Benz</option>
          <option value="Chrysler" className={css.option}>Chrysler</option>
          <option value="Kia" className={css.option}>Kia</option>
          <option value="Land" className={css.option}>Land</option>
        </select>
      </div>
      <div className={css.section}>
        <label className={css.label}>Price/1 hour:</label>
        <select className={css.priceSelect} onChange={(e) => setPrice(e.target.value)}>
          <option value="">To $</option>
          <option value="30" className={css.option}>$30</option>
          <option value="40" className={css.option}>$40</option>
          <option value="50" className={css.option}>$50</option>
          <option value="60" className={css.option}>$60</option>
          <option value="70" className={css.option}>$70</option>
          <option value="80" className={css.option}>$80</option>
        </select>
      </div>
      <div className={css.section}>
        <label className={css.label}>Car Mileage (km):</label>
        <div className={css.inputContainer}>
        <label htmlFor="from" className={css.staticPlaceholderLeft}>From</label>
        <input
        id='from'
        type="text"
        className={css.inputLeft}
        onChange={(e) => setMinMileage(e.target.value)}
        />
        <label htmlFor="to" className={css.staticPlaceholderRight}>To</label>
        <input
        id='to'
        type="text"
        className={css.inputRight}
        onChange={(e) => setMaxMileage(e.target.value)}
        />
        </div>
      </div>
      <button type="button" onClick={handleFilter} className={css.button}>
        Search
      </button>
    </form>
  );
}