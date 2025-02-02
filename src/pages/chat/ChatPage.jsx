import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import VoiceRecorder from "@/components/custom/VoiceRecorder";
import GenerativeAiComponent from "./GeminiApi";
import useUserStore from "@/store/userStore";
import ChatApp from "./ChatApp";

const ChatPage = () => {
  const { user } = useUserStore();
  return (
    <div className="flex flex-col gap-4">
      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>
          Selamat datang di sesi ini. Kami sangat senang Anda bisa
          berpartisipasi.
        </AlertTitle>
        <AlertDescription>
          Kami ingin mengenal Anda lebih baik dalam suasana yang nyaman dan
          aman. Tidak perlu ragu, setiap kata Anda sangat berarti. Silakan
          berbicara dengan tenang dan sepenuh hati. Privasi Anda adalah
          prioritas utama kami. Silahkan klik mulai merekam dibawah ini untuk
          menjawab. Kami memberikan waktu 10 menit untuk menjawab. Silahkan
          gunakan waktu dengan sebaik-baiknya.
        </AlertDescription>
      </Alert>
      <Card className="p-4 bg-secondary border-secondary">
        <div className="font-semibold">Pertanyaan 1</div>
        <div>Bagaimana kamu melihat dirimu sekarang ?</div>
      </Card>
      <VoiceRecorder user={user} />
      {/* <ChatApp/> */}
      {/* <GenerativeAiComponent /> */}
    </div>
  );
};

export default ChatPage;
