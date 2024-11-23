import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
   <div className="">
    <h1 className="text-red-800">Hello World</h1>
    <div className="flex flex-col w-40">
    <button>Submit</button>
    <Button variant={"default"}>Shadcn Button</Button>
    </div>
   </div>
    </div>
  );
}
