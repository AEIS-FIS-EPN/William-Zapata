import convict from "convict";
import convict_format_with_validator from "convict-format-with-validator";

convict.addFormats(convict_format_with_validator);

const config = convict({
    nodeEnv: {
        doc: 'Node environment',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3001,
        env: 'PORT',
    },
    frontEnd: {
        format: 'url',
        default: 'http://localhost:3000',
        env: 'URL_FRONT_END'
    },
    frontEndDocker: {
        format: 'url',
        default: 'http://todo:3000',
        env: 'URL_FRONT_END_DOCKER'
    }
});

// Perform validation
config.validate();

export {config};
