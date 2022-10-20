console.log('test')
// function updateStatus() {
//     // scanGamepads();
//     // Iterate over multiple controllers in the case the mutiple gamepads are connected
//     for (const j in controllers) {
//         const controller = controllers[j];
//         const currentState = controller.currentState;
//         const prevState = controller.prevState;
//         // Iterate over buttons
//         for (let i = 0; i < currentState.buttons.length; i++) {
//             const currButton = currentState.buttons[i];
//             const prevButton = prevState.buttons[i];
//             // Button 6 is actually the left trigger, send it to UE as an analog axis
//             // Button 7 is actually the right trigger, send it to UE as an analog axis
//             // The rest are normal buttons. Treat as such
//             if (currButton.pressed && !prevButton.pressed) {
//                 // New press
//                 if (i == 6) {
//                     emitControllerAxisMove(j, 5, currButton.value);
//                 } else if (i == 7) {
//                     emitControllerAxisMove(j, 6, currButton.value);
//                 } else {
//                     emitControllerButtonPressed(j, i, 0);
//                 }
//             } else if (!currButton.pressed && prevButton.pressed) {
//                 // release
//                 if (i == 6) {
//                     emitControllerAxisMove(j, 5, 0);
//                 } else if (i == 7) {
//                     emitControllerAxisMove(j, 6, 0);
//                 } else {
//                     emitControllerButtonReleased(j, i);
//                 }
//             } else if (currButton.pressed && prevButton.pressed) {
//                 // repeat press / hold
//                 if (i == 6) {
//                     emitControllerAxisMove(j, 5, currButton.value);
//                 } else if (i == 7) {
//                     emitControllerAxisMove(j, 6, currButton.value);
//                 } else {
//                     emitControllerButtonPressed(j, i, 1);
//                 }
//             }
//             // Last case is button isn't currently pressed and wasn't pressed before. This doesn't need an else block
//         }
//         // Iterate over gamepad axes
//         for (let i = 0; i < currentState.axes.length; i += 2) {
//             const x = parseFloat(currentState.axes[i].toFixed(4));
//             // https://w3c.github.io/gamepad/#remapping Gamepad broweser side standard mapping has positive down, negative up. This is downright disgusting. So we fix it.
//             const y = -parseFloat(currentState.axes[i + 1].toFixed(4));
//             if (i === 0) {
//                 // left stick
//                 // axis 1 = left horizontal
//                 emitControllerAxisMove(j, 1, x);
//                 // axis 2 = left vertical
//                 emitControllerAxisMove(j, 2, y);
//             } else if (i === 2) {
//                 // right stick
//                 // axis 3 = right horizontal
//                 emitControllerAxisMove(j, 3, x);
//                 // axis 4 = right vertical
//                 emitControllerAxisMove(j, 4, y);
//             }
//         }
//         controllers[j].prevState = currentState;
//     }
//     rAF(updateStatus);
// }

// function emitControllerButtonPressed(controllerIndex: any, buttonIndex: number, isRepeat: number) {
//     const Data = new DataView(new ArrayBuffer(4));
//     Data.setUint8(0, MessageType.GamepadButtonPressed);
//     Data.setUint8(1, controllerIndex);
//     Data.setUint8(2, buttonIndex);
//     Data.setUint8(3, isRepeat);
// }

// function emitControllerButtonReleased(controllerIndex: any, buttonIndex: number) {
//     const Data = new DataView(new ArrayBuffer(3));
//     Data.setUint8(0, MessageType.GamepadButtonReleased);
//     Data.setUint8(1, controllerIndex);
//     Data.setUint8(2, buttonIndex);
// }

// function emitControllerAxisMove(controllerIndex: any, axisIndex: number, analogValue: number) {
//     const Data = new DataView(new ArrayBuffer(11));
//     Data.setUint8(0, MessageType.GamepadAnalog);
//     Data.setUint8(1, controllerIndex);
//     Data.setUint8(2, axisIndex);
//     Data.setFloat64(3, analogValue, true);
//     sendInputData(Data.buffer);
// }

// function gamepadConnectHandler(e: { gamepad: any; }) {
//     console.log("Gamepad connect handler");
//     const gamepad = e.gamepad;
//     controllers[gamepad.index] = {};
//     controllers[gamepad.index].currentState = gamepad;
//     controllers[gamepad.index].prevState = gamepad;
//     console.log("gamepad: " + gamepad.id + " connected");
//     rAF(updateStatus);
// }

// function gamepadDisconnectHandler(e: { gamepad: { id: string; index: string | number; }; }) {
//     console.log("Gamepad disconnect handler");
//     console.log("gamepad: " + e.gamepad.id + " disconnected");
//     delete controllers[e.gamepad.index];
// }

// Window events for a gamepad connecting
// const haveEvents = 'GamepadEvent' in window;
// const haveWebkitEvents = 'WebKitGamepadEvent' in window;
// const controllers = {};
// const rAF = window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.requestAnimationFrame;
//     const initMethod = typeof kbEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
