import SectionsHeading from "./SectionsHeading";
import featuredImg from '../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section>
            <div>
                <div className="pb-10">
                    <SectionsHeading
                        subHeading='Check it out'
                        heading='Featured Item'
                    />
                </div>
                <div className="bg-[url('featured.jpg')] bg-cover bg-center h-[500px] w-full">
                    <div className="flex items-center h-[500px] w-full justify-center gap-20 px-36 py-20 text-white bg-black bg-opacity-50">
                        <div>
                            <img src={featuredImg} alt="" />
                        </div>
                        <div className="space-y-2">
                            <p>Hot Item</p>
                            <h2 className="uppercase font-medium">Where i can get this?</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam reiciendis inventore hic culpa eos quos possimus corporis. Quaerat ex fugit nam et! Perferendis ab sed ea veniam magnam mollitia quo assumenda, doloribus nam quia, pariatur quibusdam aliquam, nesciunt voluptate fuga dolorum illo atque iure tenetur deleniti? Quibusdam, officia recusandae. Nam.</p>

                            <button className="btn-accent btn">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;