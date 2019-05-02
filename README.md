Github repositories search app, based on create-react-app

Technologies: React, Redux.

implemented:
- repo search
- listing results
- opening any listed repo homepage in the new tab
- debounce on input and min characters limitation to reduce amount of search requests(look src/config.js for adjusting)
- request cancellation in case of incoming new request while the old one has not resolved yet
