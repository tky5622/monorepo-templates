import { DataChannelController } from "../DataChannel/DataChannelController";
import { UeDataMessage } from "./UeDataMessage";
/**
 * Handles sending Mouse Messages to the UE Instance
 */
export declare class UeInputMouseMessage extends UeDataMessage {
    /**
    * @param datachannelController - Data channel Controller
    */
    constructor(datachannelController: DataChannelController);
    /**
     * Send Mouse Enter to the UE Instance
     */
    sendMouseEnter(): void;
    /**
     * Send Mouse Leave to the UE Instance
     */
    sendMouseLeave(): void;
    /**
     * Send Mouse Down to the UE Instance
     * @param button - Mouse Button
     * @param X - X Coordinate Value of mouse
     * @param Y - Y Coordinate Value of mouse
     */
    sendMouseDown(button: number, X: number, Y: number): void;
    /**
     * Send Mouse Up to the UE Instance
     * @param button - Mouse Button
     * @param X - X Coordinate Value of mouse
     * @param Y - Y Coordinate Value of mouse
     */
    sendMouseUp(button: number, X: number, Y: number): void;
    /**
     * Send Mouse Move to the UE Instance
     * @param mouseCordX - X Mouse Coordinate
     * @param mouseCordY - Y Mouse Coordinate
     * @param deltaX - X Mouse Delta Coordinate
     * @param deltaY - Y Mouse Delta Coordinate
     */
    sendMouseMove(mouseCordX: number, mouseCordY: number, deltaX: number, deltaY: number): void;
    /**
     * Send Mouse wheel event to the UE Instance
     * @param deltaY - Mouse Wheel delta Y
     * @param X - Mouse X Coordinate
     * @param Y - Mouse Y Coordinate
     */
    sendMouseWheel(deltaY: number, X: number, Y: number): void;
}
