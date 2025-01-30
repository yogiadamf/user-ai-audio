export const downloadAudio = (recordedBlob, fileName) => {
    if (recordedBlob) {
        // Create a URL for the blob
        const url = URL.createObjectURL(recordedBlob);
        // Create an invisible download link
        const link = document.createElement("a");
        link.href = url;
        link.download = `${fileName}.wav`; // Set the default file name
        // Programmatically click the link to trigger the download
        link.click();
        // Optional: Revoke the URL after download
        URL.revokeObjectURL(url);
    }
};