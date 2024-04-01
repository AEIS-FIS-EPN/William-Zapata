"use client"

import TODOsList from "@/components/TODOsList";
import withSearch from "@/components/withSearch";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import {config} from "@/config";
import Loading from "@/components/ui/Loading";

export default function Home() {
    const [TODOs, setTODOs] = useState([]);
    const [loading, setLoading] = useState(true);

    /*useEffect*/
    useEffect(() => {
        getTODOs().then(r => r).catch(e => console.log(e))
    }, []);

    /*Fetch the data*/
    const getTODOs = async () => {
        try {
            const response = await fetch(`${config.backEnd}/api/v1/todos`);
            if (!response.ok) {
                setLoading(false);
                toast.error("Error getting data");
            }

            const result = await response.json();

            setTODOs(result);
            setLoading(false);
        } catch (e) {
            toast.error("Error with the backend server");
        }
    }

    const TODOsListWithSearch = withSearch(TODOsList, TODOs);

    return (
        <div className={"p-[1%] flex flex-col justify-between items-center"}>
            {loading ? <Loading/> : <TODOsListWithSearch/>}
        </div>
    );
}
