import { ReactNode } from "react";

type MessagePageTemplateProps = {
    message: ReactNode;
};

function MessagePageTemplate({ message }: Readonly<MessagePageTemplateProps>) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-lg">{message}</p>
        </div>
    );
}

export default MessagePageTemplate;