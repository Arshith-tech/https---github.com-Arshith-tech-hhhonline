'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PdfIframeModalProps {
  url: string;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function PdfIframeModal({
  url,
  title,
  open,
  onClose,
}: PdfIframeModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple user-agent check for mobile devices
    const mobileTest = /Mobi|Android|iPhone|iPad|iPod/i.test(
      typeof navigator === 'object' ? navigator.userAgent : ''
    );
    setIsMobile(mobileTest);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative shadow-xl flex flex-col">
        <button
          className="absolute top-2 right-2 p-2"
          aria-label="Close"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {/* Conditionally render PDF iframe only for desktop/tablet */}
        {!isMobile ? (
          <iframe
            src={url}
            width="100%"
            height="600"
            title={title}
            style={{ border: 'none' }}
            className="rounded"
          />
        ) : (
          <div className="text-center py-16">
            <span className="text-gray-700 font-medium block mb-3">
              PDF viewing is not supported on mobile devices in this window.
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-bold"
            >
              Open PDF in new tab
            </a>
          </div>
        )}
        {/* Extra: Always show fallback link as a backup */}
        {isMobile ? null : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-4 text-sm block text-right"
          >
            Can’t see the PDF? Open in new tab
          </a>
        )}
      </div>
    </div>
  );
}
