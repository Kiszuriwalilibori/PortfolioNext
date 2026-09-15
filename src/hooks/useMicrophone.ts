"use client";

import { useEffect, useState } from "react";

type MicrophonePermission = "granted" | "denied" | "prompt";

interface MicrophoneHook {
    hasMicrophone: boolean;
    microphonePermission: MicrophonePermission;
}

const useMicrophone = (): MicrophoneHook => {
    const [hasMicrophone, setHasMicrophone] = useState(false);
    const [microphonePermission, setMicrophonePermission] = useState<MicrophonePermission>("prompt");

    useEffect(() => {
        const checkMicrophone = async () => {
            if (!navigator.mediaDevices?.getUserMedia) {
                setHasMicrophone(false);
                setMicrophonePermission("denied");
                return;
            }

            try {
                const permission = await navigator.permissions.query({
                    name: "microphone" as PermissionName,
                });

                setMicrophonePermission(permission.state as MicrophonePermission);

                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });

                setHasMicrophone(stream.getAudioTracks().length > 0);

                stream.getTracks().forEach(track => track.stop());

                permission.onchange = () => {
                    setMicrophonePermission(permission.state as MicrophonePermission);
                };
            } catch {
                setHasMicrophone(false);
            }
        };

        checkMicrophone();
    }, []);

    return {
        hasMicrophone,
        microphonePermission,
    };
};

export default useMicrophone;
