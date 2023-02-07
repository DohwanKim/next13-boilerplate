const cli = require('next/dist/cli/next-dev');

require('dotenv').config();
cli.nextDev(['-p', process.env.PORT || 3000]);
