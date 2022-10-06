import { IEncoder, IInitialSettings, IPixelStreaming, IWebRTC } from "../DataChannel/IInitialSettings";
/**
 * Latency Test Results Data
 */
export declare class InitialSettings implements IInitialSettings {
    PixelStreaming?: IPixelStreaming;
    Encoder?: IEncoder;
    WebRTC?: IWebRTC;
    constructor();
    ueCompatible(): void;
}
export declare class PixelStreaming implements IPixelStreaming {
    AllowPixelStreamingCommands?: boolean;
    DisableLatencyTest?: boolean;
}
export declare class Encoder implements IEncoder {
    TargetBitrate?: number;
    MaxBitrate?: number;
    MinQP?: number;
    MaxQP?: number;
    RateControl?: "CBR" | "VBR" | "ConstQP";
    FillerData?: boolean;
    MultiPass?: "DISABLED" | "QUARTER" | "FULL";
}
export declare class WebRTC implements IWebRTC {
    DegradationPref?: "BALANCED" | "MAINTAIN_FRAMERATE" | "MAINTAIN_RESOLUTION";
    MinBitrate?: number;
    MaxBitrate?: number;
    LowQP?: number;
    HighQP?: number;
    MaxFPS?: number;
    FPS?: number;
}
