"use client";

import useLocalStorage from "@/hooks/use-local-storage-state";
import { UserInfo } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { CrossIcon } from "lucide-react";

interface Props {
  hash: string;
  author: number | string;
}

const DeleteCastButton: React.FC<Props> = ({ hash, author }) => {
  const [user] = useLocalStorage<UserInfo>("user");
  const [loading, setLoading] = useState(false);

  const deleteCast = async () => {
    if (!user.signerUuid) return;

    setLoading(true);
    try {
      const req = await fetch("/api/casts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          signerUid: user.signerUuid,
          hash: String(hash),
        }),
      });

      if (req.ok) {
        toast("Cast deleted successfully!", {
          type: "success",
          autoClose: 5000,
          position: "bottom-right",
        });
      } else {
        toast("Error deleting cast", {
          type: "error",
          autoClose: 5000,
          position: "bottom-right",
        });
      }
    } catch (e) {
      toast("Error deleting cast", {
        type: "error",
        autoClose: 5000,
        position: "bottom-right",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <>
      {Number(user.fid) === Number(author) && (
        <Button
          variant="ghost"
          onClick={deleteCast}
          className="flex items-center ml-auto hover:bg-transparent hover:text-red-500"
          disabled={loading}
        >
          {loading ? (
            "Deleting..."
          ) : (
            <>
              Remove <CrossIcon className="w-4 h-4 ml-4" />
            </>
          )}
        </Button>
      )}
    </>
  );
};

export default DeleteCastButton;
