import React, {useEffect, useState} from "react";
import Button from "@/components/ui/Button";
import PropTypes from "prop-types";
import {useRouter} from "next/navigation";
import {config} from "@/config";
import toast from "react-hot-toast";

export default function TODOItem({id, description, urgency, creationDate, completed}) {
    const router = useRouter();

    /* Handles */
    const handleUpdate = (todoID) => {
        router.push(`/todos/${todoID}`);
    }

    const handleDelete = (todoID) => {
        deleteTODO(todoID).then(r => r).catch(e => console.log(e));
    }

    /* Fetch data */
    const deleteTODO = async (todoID) => {
        try {
            const options = {
                method: "DELETE",
            };

            const response = await fetch(`${config.backEnd}/api/v1/todos/${todoID}`, options);

            if (response.status !== 204) {
                const result = await response.json();
                const message = result.map(error => error.message);
                return toast.error(`Error deleting TODO \n ${message}`);
            }

            toast.success("TODO deleted");
        } catch (e) {
            toast.error("Error with the server");
        }
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
                <input type={"checkbox"} checked={completed} name={`completed-${id}`} readOnly={true}/>
                <label className={"text-shark-950"} htmlFor={"completed"}>Completed</label>
            </div>

            <div className={"flex flex-row justify-center space-x-10"}>
                <Button onClick={() => handleUpdate(id)}>Update</Button>
                <Button variant={"secondary"} onClick={() => handleDelete(id)}>Delete</Button>
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
