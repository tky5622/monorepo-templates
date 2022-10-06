import { DataChannelController } from "../DataChannel/DataChannelController";
import { UeDataMessage } from "./UeDataMessage";
/**
 * The class for handling UE Input GamePad Messages. It implements the UeDataMessage class
 */
export declare class UeInputGamePadMessage extends UeDataMessage {
    /**
     *
     * @param datachannelController - Data Channel Controller
     */
    constructor(datachannelController: DataChannelController);
    /**
     * Send the controller button press data through the data channel
     * @param controllerIndex - the controller index number
     * @param buttonIndex - the button index number
     * @param isRepeat - is this a repeat press
     */
    sendControllerButtonPressed(controllerIndex: number, buttonIndex: number, isRepeat: boolean): void;
    /**
     * Send the controller button release data through the data channel
     * @param controllerIndex - the controller index number
     * @param buttonIndex  - the button index number
     */
    sendControllerButtonReleased(controllerIndex: number, buttonIndex: number): void;
    /**
     * Send controller axis data through the data channel
     * @param controllerIndex - the controller index number
     * @param axisIndex - the axis index number
     * @param analogValue - the analogue value number
     */
    sendControllerAxisMove(controllerIndex: number, axisIndex: number, analogValue: number): void;
}
