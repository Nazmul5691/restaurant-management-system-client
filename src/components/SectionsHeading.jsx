

const SectionsHeading = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-3/12 mx-auto">
            <div>
                <p className="pb-1 text-yellow-500">---{subHeading}---</p>
                <h2 className="text-3xl uppercase border-y-[3px] py-2">{heading}</h2>
            </div>
        </div>
    );
};

export default SectionsHeading;

