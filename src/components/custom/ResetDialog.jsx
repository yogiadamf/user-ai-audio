import PropTypes from "prop-types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TimerReset } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResetDialog({ reset }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghostDestructive">Reset</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full flex flex-col items-center gap-4 max-w-md">
        <AlertDialogTitle className="sr-only" />
        <AlertDialogDescription className="sr-only" />
        <div className="h-14 w-14 bg-destructive/10 rounded-full flex items-center justify-center [&_svg]:text-destructive">
          <TimerReset size={32} />
        </div>
        <div className="font-semibold text-lg">Reset Jawaban</div>
        <p className="text-center">
          Apakah Anda yakin akan mereset rekaman jawaban saat ini? Rekaman yang
          direset otomatis akan terhapus
        </p>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={reset}>
            Ya, Reset
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

ResetDialog.propTypes = {
  reset: PropTypes.func.isRequired,
};