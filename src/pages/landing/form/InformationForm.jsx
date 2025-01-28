import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { informationSchema } from "@/schema/InformationSchema";
import { useMutation } from "@tanstack/react-query";
import { getInformation, postInformation } from "@/api/apiService";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

const availableAges = [];
for (let i = 10; i <= 65; i++) {
  availableAges.push({ value: i.toString(), label: i.toString() });
}

export function InformationForm() {
  const form = useForm({
    resolver: zodResolver(informationSchema),
    defaultValues: {
      username: "",
      usia: "",
      gender: "Laki-laki",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postInformation,
  });

  const onSubmit = useCallback(
    (values) => {
      mutate(values);
    },
    [mutate]
  );

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Informasi Pribadi</h1>
          <p className="text-sm text-muted-foreground">
            Silahkan isi pertanyaan dibawah ini dengan benar
          </p>
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1 items-center">
                Nama
                <p className="text-xs text-red-500">*</p>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Masukkan nama"
                  autoComplete="new-username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="flex gap-1 items-center">
                Jenis Kelamin
                <p className="text-xs text-red-500">*</p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Laki-laki" />
                    </FormControl>
                    <FormLabel className="font-normal">Laki-laki</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Perempuan" />
                    </FormControl>
                    <FormLabel className="font-normal">Perempuan</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="usia"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="flex gap-1 items-center">
                Usia(Tahun)
                <p className="text-xs text-red-500">*</p>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? availableAges.find((age) => age.value === field.value)
                            ?.label
                        : "Pilih Usia"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Pilih Usia..." />
                    <CommandList>
                      <CommandEmpty>Daftar usia tidak tersedia</CommandEmpty>
                      <CommandGroup>
                        {availableAges.map((age) => (
                          <CommandItem
                            value={age.label}
                            key={age.value}
                            onSelect={() => {
                              form.setValue("usia", age.value);
                            }}
                          >
                            {age.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                age.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} >
          {!isPending && "Simpan"}
          {isPending && <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
