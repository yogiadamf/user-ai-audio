import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const ChatPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Alert className="bg-secondary">
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
      <Card>
        <CardContent>
          ppppp
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPage;
