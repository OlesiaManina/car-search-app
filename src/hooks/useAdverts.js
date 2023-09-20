import { useSelector } from 'react-redux';
import {
    selectAdverts,
    selectFavorites,
    selectIsAdvertsLoading,
    selectFilterCriteria,
} from 'redux/adverts/selectors';

export default function useNotices() {
  const adverts = useSelector(selectAdverts);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsAdvertsLoading);
  const filterCriteria = useSelector(selectFilterCriteria);

  return {
    adverts,
    favorites,
    isLoading,
    filterCriteria,
  };
}