"use client"

import {useForm} from "react-hook-form";
import Button from "@/components/ui/Button";
import "../../../styles/TODOItem.css"
import {useRouter, useParams} from "next/navigation";
import {creationDate} from "@/utils/creationDate";
import {useEffect, useState} from "react";
import {config} from "@/config";
import toast from "react-hot-toast";
import Loading from "@/components/ui/Loading";

export default function UpdateTODO() {
    const [TODO, setTODO] = useState({
        description: "",
        urgency: "",
        creationDate: "",
        completed: false
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const {todoID} = useParams();


    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        watch
    } = useForm();

    /* useEffect */
    useEffect(() => {
        getTODOByID(todoID).then(r => r).catch(e => console.log(e))
    }, []);

    const handleOnChange = (e) => {
        console.log({[e.target.name]: e.target.value})
        setTODO({...TODO, [e.target.name]: e.target.value});
    }

    const handleOnSubmit = handleSubmit(() => {
        putTODO(TODO).then(r => r).catch(e => console.log(e));
    });

    const handleOnChangeCompleted = (e) => {
        setTODO({...TODO, [e.target.name]: e.target.checked});
    };

    /* Fetch data */
    const getTODOByID = async () => {
        try {
            const response = await fetch(`${config.backEnd}/api/v1/todos/${todoID}`);
            if (!response.ok) {
                const result = await response.json();
                const message = result.map(error => error.message);
                setLoading(false);
                return toast.error(`Error getting TODO \n ${message}`);
            }

            const result = await response.json();
            setTODO(result);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("Error with the server");
        }
    };

    const putTODO = async (TODO) => {
        try {
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(TODO)
            };

            const response = await fetch(`${config.backEnd}/api/v1/todos/${todoID}`, options);

            if (response.status !== 200) {
                const result = await response.json();
                const message = result.map(error => error.message);
                return toast.error(`Error updating TODO \n ${message}`);
            }

            toast.success("TODO updated");
            setTODO({
                description: "",
                urgency: "",
                creationDate: "",
                completed: false
            });
        } catch (e) {
            toast.error("Error with the server");
        }
    }

    return (<div className={"flex flex-col items-center justify-center h-[80dvh]"}>
        {loading && <Loading/>}

        {!loading && <div
            className={"flex flex-col space-y-3 bg-gradient-to-r from-shark-300 to-shark-500 w-[25%] p-3 rounded-md"}>
            <form className={"flex flex-col space-y-5"}>
                <div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={"description"} className={"font-semibold text-white"}>Description</label>
                        <input type={"textarea"} className={"w-full h-[10dvh]"} value={TODO.description}
                               name={"description"}
                               onChange={(e) => handleOnChange(e)}/>
                        {errors.description && errors.description.message &&
                            <span className="span--error">{errors.description.message.toString()}</span>}
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <div className={"flex flex-row space-x-2"}>
                        <label htmlFor={"urgency"} className={"font-semibold text-white"}>Urgency</label>
                        <span className={"text-white"}>{watch("urgency") ?? TODO.urgency} /10</span>
                    </div>
                    <input type={"range"} min="1" max="10" step="0.5" value={TODO.urgency.toString()} name={"urgency"}
                           onChange={(e) => handleOnChange(e)}/>
                    {errors.urgency && errors.urgency.message &&
                        <span className="span--error">{errors.urgency.message.toString()}</span>}
                </div>

                <div className={"flex flex-row space-x-1"}>
                    <input type={"checkbox"} checked={TODO.completed} name={"completed"}
                           onChange={(e) => handleOnChangeCompleted(e)}/>
                    <label className={"text-white"} htmlFor={"completed"}>Completed</label>
                </div>
            </form>

            <div className={"flex flex-row space-x-10"}>
                <Button onClick={() => handleOnSubmit()}>Update</Button>
            </div>
        </div>}
    </div>);
}
