import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
    return (
        <div className={"flex flex-col justify-center items-center h-dvh"}>
            <BeatLoader color="#40434c"/>
            <div className={"text-2xl text-shark-800 font-bold"}>Loading</div>
        </div>
    );
}


