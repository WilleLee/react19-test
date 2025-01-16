import { HelloWorld } from "@monorepo/ui";
import TextEditor from "@/app/text-editor";

export default function Home() {
  return (
    <div>
      <div>
        <HelloWorld />
        <div>
          <TextEditor />
        </div>
      </div>
    </div>
  );
}
