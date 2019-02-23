import React from 'react';
import styles from './list.scss';
import classNames from 'classnames/bind';
import addBtnImg from '../../img/new.png';


const cx = classNames.bind(styles);

function List({  }){
    return (
        <div className="ListWrap">
            <div className={cx('addBtn')}>
                <img src={addBtnImg} alt={'addBtnImg'}/>
            </div>
        </div>
    );
};

export default List;