import axios from 'axios';
import { nanoid } from 'nanoid';
// import { isLocalHost } from '.';

const metricsURL = 'https://metrics-rest-api-production.up.railway.app';

const ApiSemToken = axios.create({
  baseURL: metricsURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const ApiPostSemToken = async (data: unknown) =>
  ApiSemToken.post('/visitation', data)
    .then((response) => {
      if (response) return response;
      return false;
    })
    .catch((err) => err.response);

function getMachineId() {
  let machineId = localStorage.getItem('app.obs.fctn');

  if (!machineId) {
    machineId = nanoid(42);
    localStorage.setItem('app.obs.fctn', machineId);
  }

  return machineId;
}

const createPostVisitationFn = () => {
  const pageAlias = 'dev-portfolio';
  let hasAlreadyRun = false;

  return async () => {
    if (hasAlreadyRun /* || isLocalHost() */) return;
    hasAlreadyRun = true;

    const geolocation = await axios
      .get('https://api.db-ip.com/v2/free/self', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://api.db-ip.com/v2/free/self',
        },
      })
      .then((response) => response.data)
      .catch((e) => `geolocation failed due to: ${e}`);

    const { platform, appVersion, userAgent } = window.navigator;

    await ApiPostSemToken({
      pageAlias,
      machineId: getMachineId(),
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      machineInfo: {
        platform,
        appVersion,
        userAgent,
        geolocation,
        dateTime: new Date().toLocaleDateString(),
      },
    });
  };
};

const postVisitation = createPostVisitationFn();

export { postVisitation };
