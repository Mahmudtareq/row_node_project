/* eslint-disable prettier/prettier */
/*
* Title : Environments
* Description : Handle all environment related things
*/
// dependencies

// module scaffolding
// staging environment
const environments = {};
environments.staging = {
    port: 3000,
    envName: 'staging',
};
// production environment
environments.production = {
    port: 5000,
    envName: 'production',
};

// determine which environments object
const currentEnvironment = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';
// export corresponding environment object
const environmentToExport = typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
