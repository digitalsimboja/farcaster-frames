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
  if (postType === "leaderboard") {
    return `<!DOCTYPE html>
  <html>
    <head>
      <title>${postType}</title>
      <meta property="og:title" content="WarpHeroes Frame" />
      <meta
        property="og:image"
        content="${imagePath}"
      />
      <meta property="fc:frame" content="vNext" />
      <meta
        property="fc:frame:image"
        content="${imagePath}"
      />
      <meta
        property="fc:frame:post_url"
        content="${config.hostUrl}/api/mint?type=mint"
      />
      <meta property="fc:frame:button:1" content="Mint for Free!" />
    </head>
    <body>
      <p>${content}</p>
    </body>
  </html>`;


  } else {
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
          content="https://zora.co/collect/base:0x9ceafa7f98a33f8c93808c3cc0c80d4b94e7c229/premint-1?referrer=0x19e8037e5E8390128DC3da1b2AF4F3fD6a7962Ba"
        />
        <meta property="fc:frame:button:1" content="${content}" />
      </head>
      <body>
        <p>${content}</p>
      </body>
    </html>`;

  }


};
