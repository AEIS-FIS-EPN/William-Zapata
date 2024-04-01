"use client"

import PropTypes from "prop-types";
import TODOItem from "@/components/TODOItem";
import {filterItems} from "@/utils/filterItems";


export default function TODOsList({query, dataset}) {
    const items = filterItems(query, dataset);

    return (<div>
        {items.map((TODO) => (
            <TODOItem key={TODO.id}
                      id={TODO.id}
                      description={TODO.description}
                      creationDate={TODO.creationDate}
                      urgency={TODO.urgency}
                      completed={TODO.completed}/>
        ))}
    </div>);
}

TODOsList.prototype = {
    query: PropTypes.string.isRequired,
    dataset: PropTypes.arrayOf(TODOItem).isRequired
}
