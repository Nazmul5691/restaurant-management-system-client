
import FoodCard from "./FoodCard";

const OderTabCard = ({item}) => {
    return (
        <div className="grid grid-cols-3 gap-10">
            {
                item.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default OderTabCard;

// TODO - Pagination





// import FoodCard from "./FoodCard";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const OderTabCard = ({ item }) => {

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };


//     return (
//         <div className="grid grid-cols-3 gap-10">
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div>
//                         {
//                             item.map(item => <FoodCard key={item._id} item={item} />)
//                         }
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OderTabCard;