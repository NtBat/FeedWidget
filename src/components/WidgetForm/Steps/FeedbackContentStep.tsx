import { Header } from "../../Header";

import feedbackTypes from "../FeedbackTypes";
import FeedbackTypes from "../types";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
}

export function FeedbackContentStep({
  feedbackType,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <Header
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image.source}
        alt={feedbackTypeInfo.image.alt}
      />
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
