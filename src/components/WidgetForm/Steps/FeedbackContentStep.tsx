import { Header } from "../../Header";

import feedbackTypes from "../FeedbackTypes";
import FeedbackTypes from "../types";

interface FeedbackContentStepProps {
  feedbackType: FeedbackTypes;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <Header
        title={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image.source}
        alt={feedbackTypeInfo.image.alt}
        backButton={onFeedbackRestartRequested}
      />
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
