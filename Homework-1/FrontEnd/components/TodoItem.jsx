import React, {useEffect, useState} from "react";
import Button from "@/components/ui/Button";
import PropTypes from "prop-types";

export default function TODOItem({id, description, urgency, creationDate, completed}) {
    const [complete, setComplete] = useState({
        oldComplete: false,
        newComplete: false
    });

    useEffect(() => {
        setComplete({oldComplete: completed, newComplete: completed});
    }, [completed]);

    /*Handles*/
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log({
            completed: e.target.checked
        })
        setComplete(currentState => ({
            ...currentState,
            newComplete: e.target.checked
        }));
    }

    return (
        <div
            className={"flex flex-col space-y-1.5 bg-shark-200 rounded-md border-l-8 border-stone-600 w-[350px] p-3 m-5"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"flex flex-col w-full"}>
                    <label className={"font-semibold text-shark-950"} htmlFor={"description"}>Description</label>
                    <span>{description}</span>
                </div>
                <div className={"flex-col w-1/3 text-center"}>
                    <span className={"font-semibold text-shark-950"}>{urgency}</span>
                </div>
            </div>

            <div className={"flex flex-col"}>
                <label className={"font-semibold text-shark-950"} htmlFor={"creationDate"}>Creation date</label>
                <span>{creationDate}</span>
            </div>

            <div className={"flex flex-row space-x-1"}>
                <input type={"checkbox"} checked={complete.newComplete}
                       onChange={handleChange} name={`completed-${id}`}/>
                <label className={"text-shark-950"} htmlFor={"completed"}>Completed</label>
            </div>

            <div className={"flex flex-row justify-center space-x-10"}>
                <Button>Update</Button>
                <Button variant={"secondary"}>Delete</Button>
            </div>
        </div>
    );
}

TODOItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    urgency: PropTypes.number.isRequired,
    creationDate: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};
