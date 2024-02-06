var config = () => {
    return {
      app: 'GNOC',
      apiUrl: process.env.REACT_APP_API_URL,
      clientId: 'client',
      clientSecret: 'secret',
      defaultLocale: 'vi_VN',
      defaultTimezone: 'VNM',
      defaultTimezoneOffset: '0',
      apiUrlGoogleMaps: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBCbALUWxINi8YJ6OFt04Umv2p2UIrRSig&v=3.exp&libraries=geometry,drawing,places',
      coords: { latitude: 21.0191843, longitude: 105.7879371 },
      apiUrlGetIp: 'http://ip-api.com/json',
      version: "1.0.0"
    }
  };
  
  export default config();
  