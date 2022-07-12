import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const SwitchBox = (
    {
        styles,
        path_1,
        switchText1,
        path_2,
        switchText2,
        handleClick,
        pagination
    }
) => {
    const history = useNavigate();

    return (
        <div className={styles.switchBox}>
            <div className={styles.switchButton}>
                <button
                    className={styles.switch1}
                    onClick={() => history(path_1)}
                >
                    {switchText1}
                </button>

                <button
                    className={styles.switch2}
                    onClick={() => history(path_2)}
                >
                    {switchText2}
                </button>
            </div>

            <button
                className={styles.pagination}
                onClick={() => handleClick()}
            >
                {pagination ? '关闭分页' : '开启分页'}
            </button>
        </div>
    )
};

export default SwitchBox;

SwitchBox.propTypes = {
    styles: PropTypes.object,
    path_1: PropTypes.string,
    switchText1: PropTypes.string,
    path_2: PropTypes.string,
    switchText2: PropTypes.string,
    handleClick: PropTypes.func,
    pagination: PropTypes.bool.isRequired
}