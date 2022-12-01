import { Blocks } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import s from '../Loader/Loader.module.css';

export default function Loader({ height = '100%' }) {
  return (
    <div className={s.loader} style={{ height: height }}>
      <Blocks
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
}

Loader.propTypes = {
  height: PropTypes.string,
};
