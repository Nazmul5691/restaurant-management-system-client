import React from 'react';

const MenuCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className='flex'>
            <img className='w-[100px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div className='pl-2 pr-8'>
                <h3 className='text-xl'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuCard;