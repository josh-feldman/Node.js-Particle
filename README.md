# Node.js-Particle
Demonstrated use of the Particle JavaScript API through Node.JS application to remotely command a Raspberry Pi.

Create a Particle account at https://login.particle.io/login.

On the Raspberry Pi run the following in terminal to install the Particle Agent:
bash <( curl -sL https://particle.io/install-pi )

Next, log in to your Particle account and label your device.

At https://console.particle.io/devices grab the device ID under the ID column. In src/App.js, replace the values for d_id, username, and password with this ID, your Particle email, and your Particle password, respectively.

Open the Particle Web IDE at https://console.particle.io/build/new and copy the contents of "NodeTriggerddApp.ino" into the IDE. Save the app and flash it to your Raspberry Pi device.

In terminal, navigate to the Node.js-Particle directory and run "npm install" to build the dependencies for the project. Once it is build, type "npm start" in the terminal. This will run the development version of the project. Clicking the LED ON button will activate D0 on the particle agent.
