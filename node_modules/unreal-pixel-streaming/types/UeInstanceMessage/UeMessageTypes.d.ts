/**
 * The Type of message sent to the UE instance over the data channel
 * Must be kept in sync with PixelStreamingProtocol::EToUE4Msg C++ enum.
 * {@link https://github.com/EpicGames/UnrealEngine/blob/release/Engine/Plugins/Media/PixelStreaming/Source/PixelStreaming/Private/ProtocolDefs.h} Requires Login
 */
export declare class UeMessageType {
    /**********************************************************************/
    static iFrameRequest: number;
    static requestQualityControl: number;
    static maxFpsRequest: number;
    static averageBitrateRequest: number;
    static startStreaming: number;
    static stopStreaming: number;
    static latencyTest: number;
    static requestInitialSettings: number;
    /**********************************************************************/
    static uiInteraction: number;
    static command: number;
    static keyDown: number;
    static keyUp: number;
    static keyPress: number;
    static mouseEnter: number;
    static mouseLeave: number;
    static mouseDown: number;
    static mouseUp: number;
    static mouseMove: number;
    static mouseWheel: number;
    static touchStart: number;
    static touchEnd: number;
    static touchMove: number;
    static gamepadButtonPressed: number;
    static gamepadButtonReleased: number;
    static gamepadAnalog: number;
}
