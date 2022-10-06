export interface ILatencyTestResults {
    ReceiptTimeMs?: number;
    TransmissionTimeMs?: number;
    PreCaptureTimeMs?: number;
    PostCaptureTimeMs?: number;
    PreEncodeTimeMs?: number;
    PostEncodeTimeMs?: number;
    EncodeMs?: number;
    CaptureToSendMs?: number;
}
