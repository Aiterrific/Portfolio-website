import { useRef } from "react";
import "./ConnectLocalyExpandableImage.css";

/**
 * ConnectLocalyExpandableImage — single dense diagram/board image with a
 * click-to-expand lightbox, mirroring ArtifactPair/IAFlowArtifacts.
 */
export default function ConnectLocalyExpandableImage({ src, alt, caption }) {
  const dialogRef = useRef(null);

  return (
    <figure className="clei-item">
      <button
        type="button"
        className="clei-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand: ${caption}`}
      >
        <img className="clei-thumb" src={src} alt={alt} loading="lazy" />
        <span className="clei-hint" aria-hidden="true">Click to expand</span>
      </button>
      <figcaption className="clei-caption">{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="clei-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <img className="clei-full" src={src} alt={alt} />
        <button
          type="button"
          className="clei-close"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </dialog>
    </figure>
  );
}
