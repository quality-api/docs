import Divider from "../atoms/Divider";

type ImageDownloadProps = {
    src: string;
    alt: string;
    name: string;
};

function ImageDownload({ src, alt, name }: Readonly<ImageDownloadProps>) {
    return (
        <article className="w-50 p-4 rounded-sm bg-(--color-dark-8)">
            <h2 className="text-lg mb-2">
                {name}
            </h2>

            <Divider />

            <img
                className="w-fit h-40 min-w-40"
                src={src}
                alt={alt}
                title={alt}
            />

            <a
                download={name}
                href={src}
                className="py-1 text-center block rounded-sm bg-(--color-primary-dark) hover:bg-(--color-primary-darker) text-white! cursor-pointer _outline-on-focus">
                Download
            </a>
        </article>
    );
}

export default ImageDownload;