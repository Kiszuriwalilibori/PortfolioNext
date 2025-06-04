"use client";

import { useState, useRef } from "react";
import { useMessage } from "@/hooks";

interface SpeechHook {
    isSpeechRecognitionSupported: boolean;
    toggleListening: () => void;
    listening: boolean;
}

const useSpeech = (createComment: (text: string) => void): SpeechHook => {
    const [transcript, setTranscript] = useState<string | undefined>(undefined);
    const [listening, setListening] = useState<boolean>(false);
    const showMessage = useMessage();
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const isClient = typeof window !== "undefined"; // Check for client-side

    // Get SpeechRecognition
    const SpeechRecognition = isClient ? window.SpeechRecognition || window.webkitSpeechRecognition : null;

    if (!SpeechRecognition) {
        return {
            isSpeechRecognitionSupported: false,
            toggleListening: () => {},
            listening: false,
        };
    }

    // Initialize recognition only once
    if (!recognitionRef.current) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = "pl-PL"; // Set to Polish
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
            const text = event.results[0][0].transcript;
            setTranscript(text);
        };
        recognitionRef.current.onend = () => setListening(false);
        recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
            showMessage.error(`Błąd rozpoznawania mowy: ${event.error}`);
            setListening(false);
        };
    }

    const toggleListening = () => {
        if (recognitionRef.current) {
            if (listening) {
                setListening(false);
                recognitionRef.current.stop();
                createComment(transcript || "");
            } else {
                setListening(true);
                recognitionRef.current.start();
            }
        }
    };

    return {
        isSpeechRecognitionSupported: true,
        toggleListening,
        listening,
    };
};

export default useSpeech;
