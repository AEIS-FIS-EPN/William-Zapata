const node_env = process.env.NEXT_PUBLIC_NODE_ENV;

let config;

if(node_env === "development") {
    config = {
        backEnd: process.env.NEXT_PUBLIC_URL_BACK_END ?? "http://localhost:3001"
    }
} else {
    config = {
        backEnd: process.env.NEXT_PUBLIC_URL_BACK_END_DOCKER ?? "http://api-todo:3001"
    }
}

export {config}
