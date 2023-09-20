import AdvertsList from '../../components/AdvertsList'
import useAdverts from "hooks/useAdverts";
import styles from './FavouritesPage.module.css'

export default function FavouritesPage() {

  const { favorites } = useAdverts();

  return (
    <div className={styles.container}>
      <AdvertsList items={favorites} />
    </div>
  );
}