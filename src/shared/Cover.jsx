import { Parallax } from 'react-parallax';

const Cover = ({ bgImage,title }) => {
    return (
        <Parallax
            blur={{ min: -40, max: 40 }}
            bgImage={bgImage}
            bgImageAlt="bg image"
            strength={200}
            style={{}}
        >
            <div
                className="hero h-[500px]"
                // style={{
                //     backgroundImage:
                //         `url(${bgImage})`,
                // }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold "> {title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;