import classes from './Select.module.scss';
import { REGIONAL_BLOCK } from '../../helper/contants';

const Select = ({ selected, onSelect }) => {
  const selectHandler = e => {
    onSelect(e.target.selectedOptions[0].value);
  };

  return (
    <div className={classes.Select}>
      <select name='region' onChange={selectHandler}>
        {REGIONAL_BLOCK.map(item => {
          return (
            <option key={item} value={item} defaultValue={item === selected}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
