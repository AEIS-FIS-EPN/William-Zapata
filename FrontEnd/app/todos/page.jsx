"use client"

import {useForm} from "react-hook-form";
import Button from "@/components/ui/Button";
import "../../styles/TODOItem.css"
import {creationDate} from "@/utils/creationDate";
import {config} from "@/config";
import toast from "react-hot-toast";

export default function CreateTODO() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        watch
    } = useForm();

    /* Handles */
    const handleOnSubmit = handleSubmit((data) => {
        const {description, urgency} = data;
        const auxUrgency = Number(urgency);
        const creationDateValue = creationDate();
        postTODO({description, urgency: auxUrgency, creationDate: creationDateValue, completed: false})
            .then(r => r)
            .catch(e => console.log(e))
    });

    /* Fetch data */
    const postTODO = async (TODO) => {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(TODO)
            };

            const response = await fetch(`${config.backEnd}/api/v1/todos`, options);

            if (response.status !== 201) {
                const result = await response.json();
                const message = result.map(error => error.message);
                return toast.error(`Error creating TODO \n ${message}`);
            }

            toast.success("TODO created");
            reset();
        } catch (e) {
            toast.error("Error with the server");
        }
    }

    return (<div className={"flex flex-col items-center justify-center h-[80dvh]"}>
        <div className={"flex flex-col space-y-3 bg-gradient-to-r from-shark-300 to-shark-500 w-[25%] p-3 rounded-md"}>
            <form className={"flex flex-col space-y-5"}>
                <div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={"description"} className={"font-semibold text-white"}>Description</label>
                        <input type={"textarea"} className={"w-full h-[10dvh]"}
                               {...register("description", {
                                   required: {
                                       value: true,
                                       message: "The description is required"
                                   }
                               })}/>
                        {errors.description && errors.description.message &&
                            <span className="span--error">{errors.description.message.toString()}</span>}
                    </div>
                </div>

                <div className={"flex flex-col"}>
                    <div className={"flex flex-row space-x-2"}>
                        <label htmlFor={"urgency"} className={"font-semibold text-white"}>Urgency</label>
                        <span className={"text-white"}>{watch("urgency")}/10</span>
                    </div>
                    <input type={"range"} min="1" max="10" step="0.5"
                           {...register("urgency", {
                               required: {
                                   value: true,
                                   message: "The urgency is required"
                               }
                           })}/>
                    {errors.urgency && errors.urgency.message &&
                        <span className="span--error">{errors.urgency.message.toString()}</span>}
                </div>
            </form>

            <div className={"flex flex-row space-x-10"}>
                <Button onClick={() => handleOnSubmit()}>Create</Button>
            </div>
        </div>
    </div>);
}
