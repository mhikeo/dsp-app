/**
 * Copyright (c) 2016 Topcoder Inc, All rights reserved.
 */

/**
 * Webapp configuration
 *
 * @author       TCSCODER
 * @version      1.0.0
 */

const config = {
  api: {
    basePath: process.env.REACT_APP_API_BASE_PATH,
  },
  socket: {
    url: process.env.REACT_APP_SOCKET_URL,
  },
  google: {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  },
  AUTH0_CLIEND_ID: process.env.REACT_APP_AUTH0_CLIEND_ID,
  AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,

  defaultGoogleMapConfig: {
    center: {
      lat: 42.010,
      lng: -96.824,
    },
    zoom: 9,
  },
  takeoffMissionItemCommand: 22,
  defaultMissionItem: {
    autoContinue: true,
    command: 16,
    coordinate: [0, 0, 0],
    frame: 3,
    param1: 0.000000,
    param2: 0.000000,
    param3: 0.000000,
    param4: 0.000000,
    type: 'missionItem'
  }
};

export default config;
