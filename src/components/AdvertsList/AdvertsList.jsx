import useAdverts from "hooks/useAdverts";
import AdvertsItem from '../AdvertsItem'
import NoAdv from '../../images/man-surprised.jpg'
import styles from './AdvertsList.module.css'

export default function AdvertsList({ items }) {

    const { favorites } = useAdverts();

    return (
        <>
        <ul className={styles.list}>
            {items.length > 0 ? (items.map(item => {
              const isFavorite = favorites.some(i => i.id === item.id);
                    return (<AdvertsItem
                        key={item.id}
                        item={item}
                        isFavorite={isFavorite}
                    />)})) : 
                    ( <div className={styles.noAdvWrapper}>
                        <p className={styles.title}>There's no car yet...</p>
                        <img src={NoAdv} alt='sad cat' className={styles.imgNoAdv} />
                      </div>
                    )}
                    </ul>
        </>
      );
    }