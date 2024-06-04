import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-y-6 text-center p-4 mt-4">
        <Link
          href="https://docs.neynar.com/docs/how-to-let-users-connect-farcaster-accounts-with-write-access-for-free-using-sign-in-with-neynar-siwn"
          target="_blank"
        >
          Connect Farcaster accounts for free using&nbsp;
          <span className="font-bold">Sign in with Neynar</span>
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
        >
         Farcaster -&gt; <span className="font-bold">WarpHeroes</span>
        </Link>
      </footer>
    )
}

export default Footer;