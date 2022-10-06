import { DataChannelController } from "../DataChannel/DataChannelController";
import { UeDescriptor } from "./UeDescriptor";
/**
 * Handles Sending control messages to the UE Instance
 */
export declare class UeControlMessage extends UeDescriptor {
    /**
     *
     * @param dataChannelController - Data Channel Controller
     */
    constructor(dataChannelController: DataChannelController);
    /**
     * Send IFrame Request to the UE Instance
     */
    SendIFrameRequest(): void;
    /**
     * Send Request to Take Quality Control to the UE Instance
     */
    SendRequestQualityControl(): void;
    /**
     * Send Max FPS Request to the UE Instance
     */
    SendMaxFpsRequest(): void;
    /**
     * Send Average Bitrate Request to the UE Instance
     */
    SendAverageBitrateRequest(): void;
    /**
     * Send a Start Streaming Message to the UE Instance
     */
    SendStartStreaming(): void;
    /**
     * Send a Stop Streaming Message to the UE Instance
     */
    SendStopStreaming(): void;
    /**
     * Send a Latency Test to the UE Instance
     * @param StartTimeMs - Start Time of the Latency test
     */
    sendLatencyTest(StartTimeMs: number): void;
    /**
     * Send a Request Initial Settings to the UE Instance
     */
    SendRequestInitialSettings(): void;
}
