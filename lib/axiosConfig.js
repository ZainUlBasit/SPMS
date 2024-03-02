import axios from 'axios';

// Use the http adapter for server-side requests
axios.defaults.adapter = require('axios/lib/adapters/http');

export default axios;