# Installing

Global pre-requisites:

-   Maestro: [Getting started](https://docs.maestro.dev/)
-   `npm`

# Preparing

Run `npm i`  
Run `npx pod-install`

# Running the app

Run `npm run ios` or `npm run android`

# Testing

Use Maestro to run end-to-end flows against the app running on a simulator.

1. Start the app on a simulator:
   - iOS: `npm run ios`
   - Android: `npm run android`
2. In another terminal, run the flow:
   - `maestro test e2e/sample_flow.yaml`

Notes:
- The sample flow uses `appId: org.awesome.app` (see `e2e/sample_flow.yaml`). If your app id changes, update it in the flow file.
    
# Where's Everything

Views: ./App/Containers

Components: ./App/Components

Maestro E2E flows: ./e2e/*.yaml


