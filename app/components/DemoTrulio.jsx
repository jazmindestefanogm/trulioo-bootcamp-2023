"use client"

import { Trulioo, event } from "@trulioo/docv";

export default function DemoTrulioo(){
const elementID = "trulioo-sdk"; // The HTML element id to attach to
const shortCode = "qWinHpfejeezSqek"; // Set the obtained short code from step #1

// Set up the workflow configuration
const workflowOption = Trulioo.workflow()
  .setShortCode(shortCode)
  .setDemoMode(true);
// Set up callbacks to get results and debugging errors
const callbacks = new event.adapters.ListenerCallback({
  onComplete: (success) => {
    console.info(`Verification Successful: ${success.transactionId} `);
  },
  onError: (error) => {
    console.error(
      `Verification Failed with Error Code: ${error.code}, TransactionID: ${error.transactionId}, Reason: ${error.message}`,
    );
  },
  onException: (exception) => {
    console.error("Verification Failed with Exception:", exception);
  },
});

const callbackOption = Trulioo.event().setCallbacks(callbacks);

// Initialize the SDK with the workflow configuration
Trulioo.initialize(workflowOption)
  .then((complete) => {
    console.info("Initialize complete:", complete);
    // Launch the UI with the provided HTML element ID
    Trulioo.launch(elementID, callbackOption).then((success) => {
      console.info("Launch success:", success);
    });
  })
  .catch((error) => console.error("Error:", error));

  return(
    <div id="trulioo-sdk">
    </div>
  )
}