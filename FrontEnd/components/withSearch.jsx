import {useState} from "react";
import {FcSearch} from "react-icons/fc";

/* Higher-Order Component (HOC)
* Component -> Function -> Component + function
* TodoList -> FilterItems -> TodosWithSearch
* */
export default function withSearch(Component, dataset) {
    // eslint-disable-next-line react/display-name
    return function () {
        const [query, setQuery] = useState("");

        function handleChange(e) {
            setQuery(e.target.value);
        }

        return (<div className={"flex flex-col justify-center items-center space-y-1"}>

            <div className={"flex flex-row h-8 items-center bg-shark-100 border-shark-700 rounded-md"}>
                <input onChange={handleChange} value={query} className={"bg-shark-100 border-shark-400 rounded-md"}
                       placeholder={"Search TODOs"}/>
                <FcSearch style={{
                    fontSize: "1.6rem"
                }}/>
            </div>
            <Component query={query} dataset={dataset}/>
        </div>);
    };
}
