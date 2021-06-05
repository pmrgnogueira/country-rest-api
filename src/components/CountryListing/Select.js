import classes from './Select.module.scss';
import { REGIONAL_BLOCK } from '../../helper/contants';

const Select = ({ value, onSelect }) => {
  const selectHandler = e => {
    onSelect(e.target.selectedOptions[0].value);
  };

  return (
    <div className={classes.Select}>
      <select title='regions' onChange={selectHandler} value={value}>
        {REGIONAL_BLOCK.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
