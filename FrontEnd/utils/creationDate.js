import dayjs from "dayjs";

const creationDate = () => {
    const now = dayjs();
    return now.format("DD-MM-YYYY")
}

export {creationDate}
