# Node.js-Particle
Demonstrated use of the Particle JavaScript API through Node.JS application to remotely command a Raspberry Pi. Note that this repo should be used on a remote computer. Only step 2 should be performed on the particle agent. This assumes Node and npm (Node Package Manager) are installed on the remote computer.

Creating an account
----------
Create a [Particle Account](https://login.particle.io/login).

Setting up the Particle Agent
----------
On the Raspberry Pi or run the following in terminal to install the Particle Agent:
```
   bash <( curl -sL https://particle.io/install-pi )
```
Follow terminal instructions to log in to your Particle account and label your device.

Flashing the Particle Agent
----------
Open the [Particle Web IDE](https://console.particle.io/build/new) and copy the contents of "NodeTriggerddApp.ino" into the IDE. Save the app and flash it to your Raspberry Pi device.

Completing the Source Code
----------
Head to the [Particle console devices page](https://console.particle.io/devices) grab the device ID under the ID column. In src/App.js, replace the values for d_id, username, and password with this ID, your Particle email, and your Particle password, respectively.

Running the Front End
----------
In terminal on a remote computer, navigate to the Node.js-Particle directory and run the following to build the dependencies for the project.
```
npm install 
```
Once it is built, the following in the terminal will run the development version of the project. Clicking the LED ON button will power D0 on the particle agent. Clicking the LED OFF button will unpower the pin.
```
npm start 
```

Next Steps
----------
App.js and the .ino file can be customized to demonstrate use of any GPIO pins on the Particle Agent through a further customized and more comprehensive React front end.
