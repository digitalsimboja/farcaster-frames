import { config } from "@/config/config";
interface ComputeHtmlParameters {
  postType: string;
  content: string;
  imagePath: string;
}

export const computeHtml = ({
  imagePath,
  postType,
  content,
}: ComputeHtmlParameters) => {

  return `<!DOCTYPE html>
    <html>
      <head>
        <title>${postType}</title>
        <meta property="og:title" content="WarpHeroes Frame" />
        <meta
          property="og:image"
          content="${config.hostUrl}${imagePath}"
        />
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="${config.hostUrl}${imagePath}"
        />
        <meta
          property="fc:frame:target"
          content="https://warpcast.com/~/channel/warpheroes"
        />
        <meta property="fc:frame:button:1" content="${content}" />
      </head>
      <body>
        <p>${content}</p>
      </body>
    </html>`;

};
