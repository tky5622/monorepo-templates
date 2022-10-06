import { UeInputMouseMessage } from "../UeInstanceMessage/UeInputMouseMessage";
import { DataChannelController } from "../DataChannel/DataChannelController";
import { ITouchController } from "./ITouchController";
/**
 * Allows for the usage of fake touch events and implements ITouchController
 * @param dataChannelController - The controller for the Data channel
 * @param videoPlayerElement - The video player DOM element
 */
export declare class FakeTouchController implements ITouchController {
    finger: Finger;
    ueInputMouseMessage: UeInputMouseMessage;
    videoPlayerElement: HTMLVideoElement;
    constructor(dataChannelController: DataChannelController, videoPlayerElement: HTMLVideoElement);
    /**
     * When a touch event begins
     * @param touch - the activating touch event
     */
    onTouchStart(touch: TouchEvent): void;
    /**
     * When a touch event ends
     * @param touchEvent - the activating touch event
     */
    onTouchEnd(touchEvent: TouchEvent): void;
    /**
     * On a Move touch event
     * @param touchEvent - the activating touch event
     */
    onTouchMove(touchEvent: TouchEvent): void;
}
/**
 * The interface for finger position mapping
 */
export interface Finger {
    ID: number;
    X: number;
    Y: number;
}
