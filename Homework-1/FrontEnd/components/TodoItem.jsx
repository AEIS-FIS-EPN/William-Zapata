"use client"

import Button from "@/components/ui/Button";

export default function TODOItem() {

    return (<div className={"bg-shark-200 rounded-md border-l-8 border-stone-600 w-[350px] p-3"}>
            <div className={"flex flex-row"}>
                <div className={"flex flex-col space-y-3 w-full"}>
                    <div className={"flex flex-row justify-between items-center"}>
                        <div className={"flex flex-col w-full"}>
                            <span className={"font-semibold text-shark-950"}>Description:</span>
                            <span>dd</span>
                        </div>
                        <div className={"flex-col w-1/3 text-center"}>
                            <span className={"font-semibold text-shark-950"}>1.0</span>
                        </div>
                    </div>
                    <div className={"flex flex-col"}>
                        <span className={"font-semibold text-shark-950"}>Creation date:</span>
                        <span>dd</span>
                    </div>

                    <div className={"flex flex-row justify-center space-x-10"}>
                        <Button>Update</Button>
                        <Button variant={"secondary"}>Delete</Button>
                    </div>
                </div>
            </div>
    </div>);
}
