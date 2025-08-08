import React from "react";
import { Calendar, X } from "lucide-react";

interface ArticleModalProps {
    title: string;
    author: string;
    role: string;
    date: string;
    image: string;
    fullContent: string;
    onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
    title,
    author,
    role,
    date,
    image,
    fullContent,
    onClose,
}) => {
    const getInitials = (name: string) =>
        name
            .split(" ")
            .map((n) => n[0])
            .join("");

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6 z-50 "
            onClick={onClose}
        >
            <div
                className="bg-white max-w-3xl max-h-[90vh] overflow-y-auto rounded-md p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky close button */}
                <div className="sticky top-0 z-10 flex justify-end   pb-2">
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-900"
                        aria-label="Close"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />

                <h2 className="text-3xl font-bold text-neutral-900 mb-4">{title}</h2>

                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-electric-100 flex items-center justify-center text-sm font-semibold text-electric-600">
                        {getInitials(author)}
                    </div>
                    <div>
                        <div className="font-medium text-neutral-900">{author}</div>
                        <div className="text-sm text-neutral-500">{role}</div>
                    </div>
                    <div className="flex items-center text-sm text-neutral-500 ml-auto">
                        <Calendar className="w-4 h-4 mr-1" />
                        {date}
                    </div>
                </div>

                <article className="prose max-w-none prose-neutral prose-headings:text-neutral-900 prose-p:leading-relaxed prose-a:text-electric-600">
                    {fullContent.split("\n").map((para, i) => {
                        const trimmed = para.trim();

                        if (/^Conclusion/i.test(trimmed)) {
                            return (
                                <h2
                                    key={i}
                                    className="mt-8 mb-4 text-2xl font-extrabold text-electric-600"
                                >
                                    {trimmed}
                                </h2>
                            );
                        }

                        if (/^The Role of 33ResearchLabs in Shaping the Future of AI Infrastructure/i.test(trimmed)) {
                            return (
                                <h2
                                    key={i}
                                    className="mt-8 mb-4 text-2xl font-extrabold text-electric-600"
                                >
                                    {trimmed}
                                </h2>
                            );
                        }

                        return <p key={i}>{trimmed}</p>;
                    })}
                </article>
            </div>
        </div>
    );
};
