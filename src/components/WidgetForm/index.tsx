import { useState } from "react";

import { CloseButton } from "../CloseButton";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import FeedbackTypes from "./types";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <p>ello World</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.ntbatista.dev"
          target="_blank"
          rel="noopener"
        >
          NtBatista
        </a>
      </footer>
    </div>
  );
}
