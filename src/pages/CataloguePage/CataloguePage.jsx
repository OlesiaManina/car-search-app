import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAdverts } from "redux/adverts/operations";
import { updateFilterCriteria } from '../../redux/adverts/advertsSlice';
import useAdverts from "hooks/useAdverts";
import AdvertsList from '../../components/AdvertsList'
import SearchForm from '../../components/SearchForm'
import Spinner from "utils/Spinner";
import style from './CataloguePage.module.css';

export default function CataloguePage() {

    const dispatch = useDispatch();
    const [displayCount, setDisplayCount] = useState(8);

    const { adverts, filterCriteria } = useAdverts();

    useEffect(() => {
        dispatch(updateFilterCriteria({
            brand: "",
            price: "",
            minMileage: "",
            maxMileage: "",
          }));

        dispatch(getAdverts());
    }, [dispatch]);

    const filteredAdverts = adverts.filter((advert) => {
        const { brand, price, minMileage, maxMileage } = filterCriteria;
        if (!brand && !price && !minMileage && !maxMileage) {
          return true;
        }
        let matchesAllFilters = true;
      
        if (brand && advert.make !== brand) {
          matchesAllFilters = false;
        }
        if (price && parseFloat(advert.rentalPrice.slice(1)) >= price ) {
            matchesAllFilters = false;
        }
        if (minMileage && advert.mileage < minMileage) {
            matchesAllFilters = false;
        }        
        if (maxMileage && advert.mileage > maxMileage) {
            matchesAllFilters = false;
        }
        return matchesAllFilters;
      });

    const loadMoreAdverts = () => {
        setDisplayCount(displayCount + 8); 
    };

    return (
        <div className={style.container}>
            <SearchForm/>
            <Outlet />
            {!adverts
                ? <Spinner/>
                :  <AdvertsList items={filteredAdverts.slice(0, displayCount)} />
            } 
            {filteredAdverts && displayCount < filteredAdverts.length && (
                <button onClick={loadMoreAdverts} className={style.loadMoreButton}>
                    Load More
                </button>
            )}
        </div >
    );
}