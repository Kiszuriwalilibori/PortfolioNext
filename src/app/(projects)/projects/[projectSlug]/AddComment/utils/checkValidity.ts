// import { COMMENTS_VALIDITY_THRESHOLD } from "@/config/config";
const COMMENTS_VALIDITY_THRESHOLD = 0.75;

export function checkValidity(intents: any) {
    let validity = true;
    Object.keys(intents).forEach(key => {
        const probability = intents[key].summaryScore.value;
        if (probability >= COMMENTS_VALIDITY_THRESHOLD) {
            validity = false;
        }
    });
    return validity;
}
